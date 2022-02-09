import Script from 'next/script'

export default function Page(props) {
  const basic_example = `
const basic_example = Math.random()
document.getElementById('basic_example').innerText = basic_example
`

  const up_to_number = `
const max_number = 10
const up_to_number = Math.floor((Math.random() * max_number) + 1)
document.getElementById('up_to_number').innerText = up_to_number
`
  const between_nums = `
const min = 4
const max = 20
const between_nums = Math.floor((Math.random() * (max - min + 1)) + min)
document.getElementById('between_nums').innerText = between_nums
  `

  return (
    <>
      <h1>Random Numbers</h1>

      <h2>Basic Call</h2>
      <p>This is a baisc call to Math.random()</p>
      <pre>
        <code>{basic_example.trim()}</code>
      </pre>
      <p>Example Output:</p>
      <div id="basic_example"></div>
      <Script
        id="basic_example_script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: basic_example,
        }}
      />

      <h2>Between 1 And A Max Number</h2>
      <pre>
        <code>{up_to_number.trim()}</code>
      </pre>
      <p>Example Output:</p>
      <div id="up_to_number"></div>
      <Script
        id="up_to_number_script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: up_to_number,
        }}
      />

      <h2>Between Two Numbers (with min and max)</h2>
      <pre>
        <code>{between_nums.trim()}</code>
      </pre>
      <p>Example Output:</p>
      <div id="between_nums"></div>
      <Script
        id="between_nums_script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: between_nums,
        }}
      />
    </>
  )
}
