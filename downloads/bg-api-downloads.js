// This script is only to be used in BG Official pages!!!

console.log('Loading BG API Download Module')

document.write(`
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/downloads/download-api.css">
</head>

<script src="/downloads/download-api.js"></script>


<div class="container" id="container">
  <h1 id="servername">[serverName}</h1>
  <p>Click the button below to download the file, <br> Ad free download for the most secure download!</p>
  <button id="downloadBtn">Join {serverName}</button>
</div>

<script>
document.title = serverName
document.getElementById('servername').innerText = serverName
document.getElementById('joinBtn').innerText = "Join " + serverName;

document.getElementById("joinBtn").addEventListener("click", function() {
document.getElementById("container").innerHTML = "Downloading...<br>Download System " + version + " | BG API<br>File didn't download? <a id='altMethod'>Manual Download</a>";
document.getElementById("altMethod").href = downloadURL;

});
</script>`)