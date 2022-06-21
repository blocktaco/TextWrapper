const { UltimateTextToImage } = require("ultimate-text-to-image");

async function NewRenderTextAsync(data) {
    return new UltimateTextToImage(data.text, data.options)
        .render()
}

module.exports = {
    NewRenderTextAsync: NewRenderTextAsync
}