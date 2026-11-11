# Refine Icon motion and public contract

Implement approved I01–I05 in Cedar and Maple: publish a lightweight standalone icon stylesheet and resolve it automatically, separate spin from name-transition scaling, suppress name transitions when a default slot owns content, use Button in action examples, and align Icon exports/documentation. Keep seven wrapper props, eight glyph props, and click as an ordinary notification.

Standalone explicit imports load `@cedar-design/icons-vue/style.css` or the Maple equivalent; resolvers and the UI Icon style entry include this asset. No runtime style injection or whole icon catalog import is introduced.
