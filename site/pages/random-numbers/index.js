import fs from 'fs'
import Script from 'next/script'

export default function Page(props) {
  return (
    <>
      <p>
        Here&apos;s the basic call which returns a number between zero and one
        (without ever ending up at either zero or one directly)
      </p>
      <pre>
        <code>{props.random_number_script}</code>
      </pre>
      <div id="basic"></div>
      <Script
        id="basicRandomNumberScript"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: props.random_number_script,
        }}
      />
    </>
  )
}

export async function getStaticProps(context) {
  // Helper function for loading files
  function loadFileAsString(path) {
    try {
      const fileText = fs.readFileSync(path, `utf8`)
      return fileText
    } catch (err) {
      return `Could not load: ${path}`
    }
  }
  const random_number_script = loadFileAsString(
    `./pages/random-numbers/random-number.script`
  )
  return {
    props: {
      random_number_script: random_number_script,
    },
  }
}
