CMS.registerEditorComponent({
    id: "youtube",
    label: "Youtube",
    fields: [{
        name: "id",
        label: "Youtube Video ID",
        widget: "string"
    }],
    pattern: /{{< youtube ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            id: match[1],
        };
    },
    toBlock: function(obj) {
        return `{{< youtube ${obj.id} >}}`;
    },
    toPreview: function(obj) {
        return `<img src="http://img.youtube.com/vi/${obj.id}/maxresdefault.jpg" alt="Youtube Video"/>`;
    },
});
