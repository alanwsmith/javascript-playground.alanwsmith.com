import RendererV2 from '../../components/RendererV2'

export default function Page(props) {
  const loop_through_object_v1 = {
    snippet: `
const example_1 = {
  c: "x",
  a: "x",
  b: "x"
}

const sorted_keys_1 = []

Object.entries(example_1)
.sort((a, b) => a[0].localeCompare(b[0]))
.forEach((item) => sorted_keys_1.push(item[0]))
`,
    output: `sorted_keys_1`,
  }

  const loop_through_object_v2 = {
    snippet: `
const example_2 = {
  c: "x",
  a: "x",
  b: "x"
}

const sorted_keys_2 = Object.entries(example_2)
.sort((a, b) => a[0].localeCompare(b[0]))
.map((item) => item[0])
`,
    output: `sorted_keys_2`,
  }

  return (
    <>
      <h1>Loop Through A JavaScript Object Sorted By Key</h1>
      <p>
        Note, need to check about key/value usage here to make sure this is
        being save
      </p>
      <p>Note that Object.entries passes an array with `[key, value]`</p>
      <p>
        There&apos;s probably multiple ways to do it, but this is how I&apos;m
        looping through an objects sorted by their keys
      </p>
      <RendererV2 example={loop_through_object_v1} language="jsx" />
      <p>TODO: Write up details of how this works</p>
      <RendererV2 example={loop_through_object_v2} language="jsx" />
    </>
  )
}
