const DATA_URL = 'https://gist.githubusercontent.com/joaohenriquef/268656d877899613be7fce817c15c784/raw/798e54e9e13632b2b6a0aeeeb45edabb51127384/tab-tips.csv';

async function fetchData() {
  const response = await fetch(DATA_URL);

  const csv = await response.text();

  data = csv.split(',');

  return data;
}

async function handleStartup() {
  const data = await fetchData();

  chrome.storage.local.set({ tips: data }, function() {
    console.log('Stored data: ', data);
  });
}

chrome.runtime.onStartup.addListener(handleStartup);

handleStartup;
