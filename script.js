const devmode = 0
const allowbypass = 0;
const devBuildPort = 1200;

// Initialize Dev Build Port

if (devmode === 1 || window.location.host !== "official-bgmusic.glitch.me" || forcedev === 1) {
  if (window.location.hash === "#bypass=true" && allowbypass === 1) {
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      var maintenanceMessage = document.createElement("div");
      maintenanceMessage.innerText = 
      `Website Under Maintenance
      `;
      maintenanceMessage.style.fontSize = "44px";
      maintenanceMessage.style.fontFamily = "Verdana "
      maintenanceMessage.style.fontWeight = "bold";
      maintenanceMessage.style.textAlign = "center";
      maintenanceMessage.style.padding = "20px";
      maintenanceMessage.style.position = "fixed";
      maintenanceMessage.style.top = "50%";
      maintenanceMessage.style.left = "50%";
      maintenanceMessage.style.transform = "translate(-50%, -50%)";
      maintenanceMessage.style.backgroundColor = "white";
      maintenanceMessage.style.color = "red";
      maintenanceMessage.style.border = "15px solid red";
      maintenanceMessage.style.zIndex = "9999";

      if (document.body) {
        document.body.innerHTML = "";
        var script = document.createElement("script");
        script.textContent = `
          function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
          }

          function changeBackgroundColorSmoothly() {
            document.body.style.transition = "background-color 2s";
            document.body.style.backgroundColor = getRandomColor();
          }

          setInterval(changeBackgroundColorSmoothly, 700);
getRandomColor();        
`;
        document.body.appendChild(script);
        document.body.appendChild(maintenanceMessage);
      } else {
        console.error("Document body not available.");
      }
    });
  }
}
