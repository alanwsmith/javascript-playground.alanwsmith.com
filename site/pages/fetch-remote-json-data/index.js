import fs from 'fs'
import Script from 'next/script'

export default function Page(props) {
  const holder = (
    <div
      dangerouslySetInnerHTML={{
        __html: props.content_html,
      }}
    />
  )

  return (
    <div>
      {holder}
      <pre>
        <code>{props.content_html}</code>
      </pre>
      <pre>
        <code>{props.script_js}</code>
      </pre>
      <pre>
        <code>{props.data_json}</code>
      </pre>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: props.script_js,
        }}
      />
    </div>
  )
}

export async function getStaticProps(context) {
  function loadFileAsString(path) {
    try {
      const fileText = fs.readFileSync(path, `utf8`)
      return fileText
    } catch (err) {
      return `Could not load: ${path}`
    }
  }

  return {
    props: {
      content_html: loadFileAsString(
        `./pages/fetch-remote-json-data/content.html`
      ),
      script_js: loadFileAsString(`./pages/fetch-remote-json-data/script.js`),
      data_json: loadFileAsString(`./pages/fetch-remote-json-data/data.json`),
    },
  }
}
