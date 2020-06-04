CMS.registerEditorComponent({
    id: "instagram",
    label: "Instagram",
    fields: [{
        name: "pid",
        label: "Post id",
        widget: "string"
    }],
    pattern: /{{< instagram ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            pid: match[1]
        };
    },
    toBlock: function(obj) {
        return `{{< instagram ${obj.pid} >}}`;
    },
    toPreview: function(obj) {
        return `{{< instagram ${obj.pid} >}}`;
    },
});
