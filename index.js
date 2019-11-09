function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function handleLoad() {
  chrome.storage.local.get(['tips'], function(result) {
    const tipDiv = document.getElementById("tip")
    tipDiv.innerText = getRandomItem(result.tips);
  });
}

window.onload = handleLoad;
