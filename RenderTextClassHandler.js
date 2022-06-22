const { UltimateTextToImage } = require("ultimate-text-to-image");

async function NewRenderTextAsync(data) {
    console.log(data.options.outline)
    const TextToImageResult = new UltimateTextToImage(data.text, data.options)
    return {
        data: TextToImageResult.render().toBuffer().toString('base64'),
        width: TextToImageResult.width,
        height: TextToImageResult.height
    }
}

module.exports = {
    NewRenderTextAsync: NewRenderTextAsync
}