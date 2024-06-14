let showBanner = 1

if (showBanner === 1) {
    
const bannerText = "This is an test"
const buttonText = "View"
const buttonURL = "/birthday"
const backgroundColor = `orange`
const textColor = 'black'

if (buttonURL === "none") {
document.write(`
<div style="background-color: ${backgroundColor}; width: 100%; height: 7%; position: sticky; box-shadow: 2px 10px 8px 5px ${backgroundColor}" >
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

<div style="background-color: ${backgroundColor}; width: 100%; height: 7%; position: sticky; box-shadow: 2px 10px 8px 5px ${backgroundColor}" >
    <h4 style="display: inline-block; text-align: center; width: 100%;" >
        <p style="display: inline; color: ${textColor}">${bannerText}</p> 
        <a href="${buttonURL}" style="color: ${textColor}; background-color: ${backgroundColor}; border-radius: 50px; padding: 10px; float: right;" class="linkButton">${buttonText}</a>
    </h4>
</div>
`)
}
    

}
