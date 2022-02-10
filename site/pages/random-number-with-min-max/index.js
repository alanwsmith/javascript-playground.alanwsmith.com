import Renderer from '../../components/Renderer'
import RendererV2 from '../../components/RendererV2'

export default function Page(props) {
  const min_max_example = {
    snippet: `
const min = 7 
const max = 10
const random_between_min_max = Math.floor(
  (Math.random() * (max - min + 1)) 
  + min
)
`,
    output: 'random_between_min_max',
  }

  const min_max_function_example = {
    snippet: `
function get_random_number_min_max(min, max) {
  return Math.floor(
    (Math.random() * (max - min + 1)) 
    + min
  )
}`,
    output: `get_random_number_min_max(7, 10)`,
  }

  return (
    <>
      <h1>Random Number With Minimum And Maximum</h1>

      <p>
        This code produces a random number between the defined minimum and
        maximum:
      </p>

      <RendererV2 example={min_max_function_example} language="jsx" />

      <p>
        The number is inclusive of the of min and max values so they can be
        returned. For example, the snippet with return either 7, 8, 9, or 10.
      </p>

      <p>Here&apos;s the code outside of a function:</p>

      <RendererV2 example={min_max_example} language="jsx" />
    </>
  )
}
