CMS.registerEditorComponent({
    id: "instagram",
    label: "Instagram",
    fields: [
      {
          name: "pid",
          label: "Post id",
          widget: "string"
      },
      {
        name: "hidecaption",
        label: "Hide caption",
        widget: "boolean"
      }
    ],
    pattern: /{{< instagram (?<pid>[a-zA-Z0-9]+)\s{0,}(?<hidecaption_flag>hidecaption)?\s+>}}/,
    fromBlock: function(match) {
        return {
            pid: match[1],
            hidecaption: match[2]
        };
    },
    toBlock: function(obj) {
        return `{{< instagram ${obj.pid} ${
          obj.hidecaption ? "hidecaption" : ""
        }>}}`;
    },
    toPreview: function(obj) {
        return `{{< instagram ${obj.pid} ${
          obj.hidecaption ? "hidecaption" : ""
        }>}}`;
    },
});
