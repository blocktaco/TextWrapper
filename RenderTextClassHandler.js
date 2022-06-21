const { UltimateTextToImage } = require("ultimate-text-to-image");

async function NewRenderTextAsync(data) {
    console.log(data)
    console.log(data.options)
    console.log(data.text)
}

/*new UltimateTextToImage(`Monkey`, {
    fontFamily: "Tahoma",
    fontColor: "#000000",
    fontWeight: 700,
    fontSize: 9
})
    .render()
    .toFile('Result.png');*/

module.exports = {
    NewRenderTextAsync: NewRenderTextAsync
}