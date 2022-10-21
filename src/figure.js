CMS.registerEditorComponent({
    id: "figure",
    label: "Figure",
    fields: [{
        name: "title",
        label: "Titre",
        widget: "string",
    }, {
        name: "alt",
        label: "Description",
        widget: "string"
    }, {
        name: "src",
        label: "Image",
        widget: "image"
    }],
    pattern: /{{<\s*figure(.*)>}}/,
    fromBlock: function (input) {
        let output = {alt: "", src: "", title: ""}
        let options = input[1].match(/\w+\s*=\s*"[^"]*"/g);
        if (options) {
            options.forEach((i) => {
                const keyValue = i.split("=");
                output = {...output, [keyValue[0]]: keyValue[1].replace(/"/g, '')}
            });
        }
        return output;
    },
    toBlock: function (obj) {
        let options = "";
        options += obj.src ? ` src="${obj.src}"` : '';
        options += obj.alt ? ` alt="${obj.alt}"` : '';
        options += obj.title ? ` title="${obj.title}"` : '';
        return `{{< figure ${options}>}}`;
    },
    toPreview: ({title, alt, src}, getAsset, fields) => {
        const imageField = fields?.find(f => f.get('widget') === 'image');
        const imgSrc = getAsset(src, imageField);
        return `<figure><img src="${imgSrc}" alt="${alt}"><figcaption><h4>${title}</h4></figcaption></figure>`;
    },
});
