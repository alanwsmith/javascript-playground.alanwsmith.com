import RendererV2 from '../../components/RendererV2'

export default function Page(props) {
  const start_substring_example = {
    snippet: `
const full_string_1 = "example"
const substring_from_start = full_string_1.substring(0, 3)
`,
    output: `substring_from_start`,
  }

  const end_substring_example = {
    snippet: `
const full_string_2 = "example"
const substring_to_end = full_string_2.substring(3)
`,
    output: `substring_to_end`,
  }

  return (
    <>
      <h1>Get A Substring From A String</h1>
      <h2>Basic Usage</h2>
      <p>This is how to get part of a string</p>
      <RendererV2 example={start_substring_example} language="jsx" />
      <ul>
        <li>The first number is an index of where to start</li>
        <li>The last number is the number of characters</li>
        <li>The indexes are zero based so `0` is the start of the string</li>
      </ul>
      <h2>Grab The Rest Of A String</h2>
      <p>
        Passing only one number will create a substring starting at that index
        and grab the rest of the string from that point
      </p>
      <RendererV2 example={end_substring_example} language="jsx" />
    </>
  )
}
