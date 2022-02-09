import Renderer from '../../components/Renderer'

export default function Page(props) {
  const basic_example = `
const basic_example = Math.random()

console.log(basic_example)
`

  const up_to_number = `
const max_number = 10
const up_to_number = Math.floor((Math.random() * max_number) + 1)

console.log(up_to_number)
`
  const between_nums = `
const min = 4
const max = 20
const between_nums = Math.floor(
  (Math.random() * (max - min + 1)) 
  + min
)

console.log(between_nums)
`

  return (
    <>
      <h1>Random Numbers</h1>
      <h2>Between 1 And A Max Number</h2>
      <p>
        This is the one I use the most. It generates a random number between 1
        and the max number given. (Including the possiblity of both 1 and the
        max number being picked.)
      </p>
      <Renderer code={up_to_number} language="javascript" />

      <h2>Between Two Numbers</h2>
      <p>
        This pulls in between two numbers (inclucing the numbers themselves).
      </p>
      <Renderer code={between_nums} language="javascript" />

      <h2>Basic Call</h2>
      <p>
        This is the basic functionality which provides a decimal number between
        0 and 1. 
      </p>
      <Renderer code={basic_example} language="javascript" />
    </>
  )
}
