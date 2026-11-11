const { createRequire } = require("node:module");
const fs = require("node:fs");
const path = require("node:path");
const zlib = require("node:zlib");
const base = path.resolve(__dirname, "../..");
const { chromium } = createRequire(base + "/cedar-design-web/package.json")(
  "playwright",
);
(async () => {
  const report = {};
  const browser = await chromium.launch({ headless: true });
  for (const [lib, pkg, prefix, attr] of [
    ["cedar-design-web", "ui", "c", "cedar-theme"],
    ["maple-design-mobile", "ui", "mp", "maple-theme"],
  ]) {
    const src = path.join(base, lib, "packages", pkg, "src");
    const localLess = createRequire(
      path.join(
        src,
        prefix === "mp" ? "../../cli/package.json" : "../package.json",
      ),
    )("less");
    const inputs = [
      "style/theme/css-variables.less",
      "button/style/index.less",
      "input/style/index.less",
      "nav-menu/style/index.less",
    ];
    if (prefix === "c") inputs.push("layout/style/index.less");
    const css = (
      await localLess.render(
        inputs.map((p) => `@import "${path.join(src, p)}";`).join("\n"),
        { filename: src + "/theme-qa.less" },
      )
    ).css;
    const page = await browser.newPage();
    await page.setContent(
      `<style>${css} body{margin:0} .region{padding:12px;background:var(--${prefix}-color-bg-2);color:var(--${prefix}-color-text-1)} .probe{background:var(--${prefix}-color-bg-2);color:var(--${prefix}-color-text-1);border-color:var(--${prefix}-input-border-color)} </style><div id="outside" class="region">Outside</div><div id="dark" data-${prefix}-theme="dark" class="region">Dark <button class="${prefix}-button ${prefix}-button--status-default ${prefix}-button--variant-default ${prefix}-button--size-md">Button</button><div id="light" data-${prefix}-theme="light" class="region">Nested light <button class="${prefix}-button ${prefix}-button--status-default ${prefix}-button--variant-default ${prefix}-button--size-md">Button</button></div></div><div id="popup" data-${prefix}-theme="dark" class="region">Body popup</div>`,
    );
    const sample = () =>
      page.evaluate(
        ({ prefix, attr }) =>
          Object.fromEntries(
            ["outside", "dark", "light", "popup"].map((id) => {
              const el = document.getElementById(id),
                s = getComputedStyle(el);
              return [
                id,
                {
                  bg: s.backgroundColor,
                  color: s.color,
                  scheme: s
                    .getPropertyValue("--" + prefix + "-color-scheme")
                    .trim(),
                  buttonBg: el.querySelector("button")
                    ? getComputedStyle(el.querySelector("button"))
                        .backgroundColor
                    : undefined,
                },
              ];
            }),
          ),
        { prefix, attr },
      );
    const initial = await sample();
    if (
      initial.dark.bg === initial.light.bg ||
      initial.outside.bg !== initial.light.bg ||
      initial.popup.bg !== initial.dark.bg
    )
      throw Error("local nesting failed " + JSON.stringify(initial));
    await page.evaluate(
      (attr) => document.documentElement.setAttribute(attr, "dark"),
      attr,
    );
    const globalDark = await sample();
    if (globalDark.light.bg === globalDark.outside.bg)
      throw Error("light did not escape global dark");
    // 1000 real Button nodes, force style resolution on every switch; a synthetic style-cost measure, not paint latency.
    const timings = await page.evaluate(
      ({ prefix }) => {
        const host = document.getElementById("dark");
        host.innerHTML = Array.from(
          { length: 1000 },
          () =>
            `<button class="${prefix}-button ${prefix}-button--size-md ${prefix}-button--status-default ${prefix}-button--variant-default">Button</button>`,
        ).join("");
        const times = [];
        for (let i = 0; i < 30; i++) {
          const t = performance.now();
          host.setAttribute(`data-${prefix}-theme`, i % 2 ? "dark" : "light");
          for (const e of host.children) getComputedStyle(e).backgroundColor;
          times.push(performance.now() - t);
        }
        times.sort((a, b) => a - b);
        return {
          nodes: 1000,
          switches: 30,
          medianMs: times[15],
          p95Ms: times[28],
        };
      },
      { prefix },
    );
    const withoutScope = css
      .replace(/,\s*:where\(\[data-[^\]]+\]\)/g, "")
      .replace(/:where\(\[data-[^\]]+\]\)\s*\{[^}]*\}/g, "");
    report[lib] = {
      initial,
      globalDark,
      timings,
      cssBytes: Buffer.byteLength(css),
      gzipBytes: zlib.gzipSync(css).length,
      selectorGzipDelta:
        zlib.gzipSync(css).length - zlib.gzipSync(withoutScope).length,
    };
    fs.writeFileSync("/tmp/" + prefix + "-local-theme.css", css);
    await page.close();
  }
  await browser.close();
  fs.writeFileSync(
    "/tmp/local-theme-browser-results.json",
    JSON.stringify(report, null, 2),
  );
  console.log(JSON.stringify(report, null, 2));
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
