CMS.registerEditorComponent({
    id: "gist",
    label: "Gist",
    fields: [{
            name: "username",
            label: "Gist Username",
            widget: "string"
        },
        {
            name: "gid",
            label: "Gist ID",
            widget: "string"
        },
    ],
    pattern: /{{< gist ([a-zA-Z0-9-_]+) ([a-zA-Z0-9-_]+) >}}/,
    fromBlock: function(match) {
        return {
            username: match[1],
            gid: match[2],
        };
    },
    toBlock: function(obj) {
        return `{{< gist ${obj.username} ${obj.gid} >}}`;
    },
    toPreview: function(obj) {
        return `{{< gist ${obj.username} ${obj.gid} >}}`;
    },
});
