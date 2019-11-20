function getRandomItem(data) {
  return data[Math.floor(Math.random() * data.length)];
}

async function handleLoad() {
  const data = await d3.tsv("../../assets/data/data.tsv");
  const item = getRandomItem(data);

  d3.select(".tip-text").html(item.tip);
  d3.select(".sub-topic").text(` / ${item.subject}`)
}

window.onload = handleLoad;