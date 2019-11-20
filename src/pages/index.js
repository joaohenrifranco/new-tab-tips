function getRandomItem(data) {
  return data[Math.floor(Math.random() * data.length)];
}

async function handleLoad() {
  const data = await d3.tsv("../../assets/data/data.tsv");
  const item = getRandomItem(data);

  d3.select(".tip")

  const tipDiv = document.getElementById("tip")
  console.log(item);
  tipDiv.innerText = item.tip;
}

window.onload = handleLoad;
