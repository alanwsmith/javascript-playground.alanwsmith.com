import Renderer from '../../components/Renderer'
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

  const min_max_example = {
    snippet: `
const min = 7 
const max = 10
const random_min_max = Math.floor(
  (Math.random() * (max - min + 1)) 
  + min
)
`,
    output: 'random_min_max',
  }

  const basic_example = {
    snippet: `
const basic_example = Math.random()
`,
    output: `basic_example`,
  }

  return (
    <>
      <h1>Random Numbers</h1>

      <h2>Basic Random Number</h2>
      <p>
        This is the one I use the most. It generates a random number between 1
        and the max number given. (Including the possiblity of both 1 and the
        max number being returned.) In this example, the value will be either 1,
        2, 3, 4, or 5.
      </p>
      <RendererV2 example={random_number_example} language="jsx" />

      <h2>Between Two Numbers</h2>
      <p>
        This version generates a random number that's in between two numbers The
        value can be the either the defined minimum or maximum. In this example,
        the number will be either 7, 8, 9, or 10.
      </p>
      <RendererV2 example={min_max_example} language="jsx" />

      <h2>Basic Call</h2>
      <p>
        This is the basic functionality of `.random()`. It generates a decimal
        number between 0 and 1. I don't use this often, but it&apos;s the basis
        for the rest of the examples.
      </p>
      <RendererV2 example={basic_example} language="jsx" />
    </>
  )
}
