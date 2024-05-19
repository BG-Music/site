let showBanner = 0

if (showBanner === 1) {
const bannerText = "🎂 It's my birthday!! 🎂"
const buttonText = "View"
const buttonURL = "/birthday"
const backgroundColor = `orange`
const textColor = 'black'
const colorTwo = 'yellow'

document.write(`
<div style="background-color: ${backgroundColor}; width: 100%; height: 7%; position: sticky; box-shadow: 2px 10px 8px 5px ${backgroundColor}" >
    <h4 style="display: inline-block; text-align: center; width: 100%;" >
        <p style="display: inline; color: ${textColor}">${bannerText}</p> 
        <a href="${buttonURL}" style="color: ${textColor}; background-color: ${colorTwo}; border-radius: 50px; padding: 10px; float: right;">${buttonText}</a>
    </h4>
</div>
`)
}
