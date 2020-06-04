CMS.registerEditorComponent({
    id: "figure",
    label: "Figure",
    fields: [{
            name: "title",
            label: "Figure Title",
            widget: "string"
        },
        {
            name: "src",
            label: "Figure SRC",
            widget: "string"
        },
    ],
    pattern: /{{< figure src="([a-zA-Z0-9-_ ]+)" title="([a-zA-Z0-9-_ ]+)" >}}/,
    fromBlock: function(match) {
        return {
            title: match[1],
            src: match[2],
        };
    },
    toBlock: function(obj) {
        return `{{< figure src="${obj.src}" title="${obj.title}" >}}`;
    },
    toPreview: function(obj) {
        return `<figure><img src=${obj.src} alt=${obj.title}><figcaption>${obj.title}</figcaption></figure>`;
    },
});
