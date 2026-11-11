import { h } from "vue";
import { Message } from "@cedar-design/ui-vue";

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
    title: "Css变量/变量效果",
    dataIndex: "effective",
    render: (data) => {
      return h(
        "div",
        {
          style: {
            cursor: "pointer",
          },
          onClick: () => {
            navigator.clipboard
              .writeText("var(--" + data.record.class + ")")
              .then(() => {
                Message.success("copy success");
              })
              .catch((err) => {
                Message.fail("copy fail");
              });
          },
        },
        [
          h("div", "--" + data.record.class),
          h("div", { class: data.record.class }, data.record.properties),
        ],
      );
    },
  },
  {
    title: "Description",
    dataIndex: "description",
  },
];
