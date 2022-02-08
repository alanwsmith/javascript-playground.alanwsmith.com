function processFetchedData(data) {
  document.getElementById('target').innerText = data.text
}

fetch('/api/get-json?file_key=fetch-remote-json-data/data.json')
  .then((response) => response.json())
  .then((data) => processFetchedData(data))
