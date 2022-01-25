export default function Page() {
  return <div>asdf</div>
}

function holding() {
  function showIt(data) {
    console.log(data)
  }
  document.addEventListener('DOMContentLoaded', function () {
    // This version is a race condition where the
    // value gets printed before it's set
    console.log('here')
    let thing = 'start'
    fetch('/fetch-test-1/data.json')
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data) => (thing = data.key))
      .then(() => console.log(`-- Inside: ${thing}`))
    console.log(`-- Outside: ${thing}`)

    //
    fetch('/fetch-test-1/data.json')
      .then((response) => response.json())
      .then((data) => showIt(data))
  })
}
