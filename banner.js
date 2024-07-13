// Show de banner to make it display duh
let showBanner = 0
// Banner Config
const bannerText = "Welcome to the new style!"
const buttonText = "this is an button!!"
// Link Setings
const buttonURL = "none"
// Very Simple colour settings (Code now auto does the button colours :) cuz i got lazy owo)
const backgroundColor = `#7d4dd6`
const textColor = 'black' // If the background color is too dark change to white :) kinda obvious but yk








// Banner Execute
if (showBanner === 1) {
if (buttonURL === "none") {
document.write(`
<div style="background-color: ${backgroundColor}; width: 100%; height: 7%; position: absolute; box-shadow: 1px 4px 4px 4px ${backgroundColor}; top:0" >
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

<div style="background-color: ${backgroundColor}; width: 100%; height: 7%; position: absolute; box-shadow: 1px 4px 4px 4px ${backgroundColor}; top:0" >
    <h4 style="display: inline-block; text-align: center; width: 100%;" >
        <p style="display: inline; color: ${textColor}">${bannerText}</p><br> 
        <a href="${buttonURL}" style="color: ${textColor}; background-color: ${backgroundColor}; border-radius: 50px; padding: 10px; float: right; position: absolute; top:25%; right:0" class="linkButton">${buttonText}</a>
    </h4>
</div>
`)
}
    

}
