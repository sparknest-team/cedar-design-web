import { h } from "vue";

export const columns = [
  {
    title: "Class",
    dataIndex: "class",
    render: (data) => {
      return h(
        "div",
        {
          style: {
            cursor: "pointer",
          },
          onClick: () => {
            navigator.clipboard
              .writeText(data.record.class)
              .then(() => {
                Message.success("copy success");
              })
              .catch((err) => {
                Message.fail("copy fail");
              });
          },
        },
        data.record.class,
      );
    },
  },
  {
    title: "Properties/Effective CSS",
    dataIndex: "properties",
    render: (data) => {
      return [
        h("div", {
          style: "font-weight: 500;",
          innerHTML: `<div>${data.record.properties.replaceAll("\n", "<br/>")}</div>`, // 等效于 v-html
        }),
        h("div", {
          class: data.record.class,
          style: "margin-top: 5px;",
          innerHTML: `<div>${data.record.effective?.replaceAll("\n", "<br/>")}</div>`, // 等效于 v-html
        }),
      ];
    },
  },
];
