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
    pattern: /^figure (\S+)$/,
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
    pattern: /^gist (\S+)$/,
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
CMS.registerEditorComponent({
    id: "instagram",
    label: "Instagram",
    fields: [{
        name: "pid",
        label: "Post id",
        widget: "string"
    }],
    pattern: /^instagram (\S+)$/,
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
CMS.registerEditorComponent({
    id: "twitter",
    label: "Twitter",
    fields: [{
        name: "tid",
        label: "Tweet id",
        widget: "string"
    }],
    pattern: /^twitter (\S+)$/,
    fromBlock: function(match) {
        return {
            tid: match[1]
        };
    },
    toBlock: function(obj) {
        return `{{< tweet ${obj.tid} >}}`;
    },
    toPreview: function(obj) {
        return `{{< tweet ${obj.tid} >}}`;
    },
});
CMS.registerEditorComponent({
    id: "vimeo",
    label: "Vimeo",
    fields: [{
        name: "shortcode",
        label: "Vimeo shortcode",
        widget: "string"
    }],
    pattern: /^vimeo (\S+)$/,
    fromBlock: function(match) {
        return {
            shortcode: match[1]
        };
    },
    toBlock: function(obj) {
        return `{{< vimeo ${obj.shortcode} >}}`;
    },
    toPreview: function(obj) {
        return `{{< vimeo ${obj.shortcode} >}}`;
    },
});
CMS.registerEditorComponent({
    id: "youtube",
    label: "Youtube",
    fields: [{
        name: "id",
        label: "Youtube Video ID",
        widget: "string"
    }],
    pattern: /^youtube (\S+)$/,
    fromBlock: function(match) {
        return {
            id: match[1],
        };
    },
    toBlock: function(obj) {
        return "{{< youtube " + obj.id + ">}}";
    },
    toPreview: function(obj) {
        return `<img src="http://img.youtube.com/vi/${obj.id}/maxresdefault.jpg" alt="Youtube Video"/>`;
    },
});