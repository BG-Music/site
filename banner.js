// Show de banner to make it display duh
let showBanner = 0
// Banner Config
const bannerText = "This is an test, button banner"
const buttonText = "this is an button!!"
// Link Setings
const buttonURL = "/projects"
// Very Simple colour settings (Code now auto does the button colours :) cuz i got lazy owo)
const backgroundColor = `#7d4dd6`
const textColor = 'black' // If the background color is too dark change to white :) kinda obvious but yk








// Banner Execute
if (showBanner === 1) {
if (buttonURL === "none") {
document.write(`
<div style="background-color: ${backgroundColor}; width: 100%; height: 7%; position: sticky; box-shadow: 1px 4px 4px 4px ${backgroundColor}" >
    <h4 style="display: inline-block; text-align: center; width: 100%;" >
        <p style="display: inline; color: ${textColor}">${bannerText}</p>
    </h4>
</div>
`)
} else {
document.write(`
<style>
.linkButton:hover {
filter: brightness(75%);
}

.linkButton:active {
filter: brightness(65%);
}

.linkButton {
filter: brightness(90%);
}
</style>

<div style="background-color: ${backgroundColor}; width: 100%; height: 7%; position: sticky; box-shadow: 1px 4px 4px 4px ${backgroundColor}" >
    <h4 style="display: inline-block; text-align: center; width: 100%;" >
        <p style="display: inline; color: ${textColor}">${bannerText}</p> 
        <a href="${buttonURL}" style="color: ${textColor}; background-color: ${backgroundColor}; border-radius: 50px; padding: 10px; float: right;" class="linkButton">${buttonText}</a>
    </h4>
</div>
`)
}
    

}
