import RendererV2 from '../../components/RendererV2'

export default function Page(props) {
  const pad_string_example = {
    snippet: `
const startString = '42'
const newString = startString.padStart(4, '0')
`,
    output: `newString`,
  }

  return (
    <>
      <h1>Pad A String With Leading Zeros</h1>
      <p>This is how to pad a string with leading zeros</p>
      <RendererV2 example={pad_string_example} language="jsx" />
    </>
  )
}
