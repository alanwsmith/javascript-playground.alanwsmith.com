import RendererV2 from '../../components/RendererV2'

export default function Page(props) {
  const random_number_example = {
    snippet: `
const max_number = 5 
const random_number = Math.floor(
  (Math.random() * max_number) + 1
)
`,
    output: `random_number`,
  }

  const random_number_function_example = {
    snippet: `
function get_random_number(max_number) {
  return Math.floor(
    (Math.random() * max_number) + 1
  )
}`,
    output: `get_random_number(5)`,
  }

  return (
    <>
      <h1>Random Number</h1>
      <p>This is the standard random number generator I use.</p>
      <RendererV2 example={random_number_example} language="jsx" />
      <p>
        It works by setting a maximum number and then generates a number between
        1 and whatever was set. It&apos;s inclusive so both 1 and whatever the
        max number is are possible values.
      </p>
      <p>Here&apos;s the same thing as a function:</p>
      <RendererV2 example={random_number_function_example} language="jsx" />
    </>
  )
}
