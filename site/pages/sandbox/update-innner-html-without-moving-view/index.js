import fs from 'fs'
import Script from 'next/script'
import { useEffect } from 'react'

export default function Page(props) {
  return (
    <div>
      <h1>Update InnerHTML Without Moving The Current View</h1>
      <h3>Description</h3>
      <p>
        This is a test to see if updating innerHTML causes the view of the
        content to move when making updates. The expectation is that if
        there&apos;s the same amount of content, nothing will shift. This is
        shown in this example by scrolling down and clicking the Do Update
        button. The content block is updated with uppercase letters but the
        content view does not shift position.{' '}
      </p>

      <h3>HTML Source Code</h3>

      <pre>
        <code>{props.content_html}</code>
      </pre>

      <h3>JavaScript Source Code</h3>

      <pre>
        <code>{props.script_js}</code>
      </pre>

      <h3>Output</h3>
      <div
        className="text-6xl font-mono"
        dangerouslySetInnerHTML={{
          __html: props.content_html,
        }}
      />

      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: props.script_js,
        }}
      />
    </div>
  )

  return (
    <div>
      <h3>HTML</h3>

      <Highlight
        {...defaultProps}
        theme={theme}
        code={exampleCode}
        language="jsx"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        )}
      </Highlight>

      <Highlight {...defaultProps} code={exampleCode} language="bash">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>

      <h3>Output</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: props.content_html,
        }}
      />
    </div>
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

  const content_html = loadFileAsString(
    `./pages/sandbox/update-innner-html-without-moving-view/content.html`
  )

  const script_js = loadFileAsString(
    `./pages/sandbox/update-innner-html-without-moving-view/script.js`
  )

  const data_json = loadFileAsString(
    `./pages/sandbox/update-innner-html-without-moving-view/data.json`
  )

  return {
    props: {
      content_html: content_html,
      script_js: script_js,
      data_json: data_json,
    },
  }
}

// const thing = `
//       <pre className="line-numbers">
//         <code className="language-html">{props.content_html}</code>
//       </pre>
//       <h3>JavaScript</h3>
//       <pre className="line-numbers">
//         <code className="language-jsx">{props.script_js}</code>
//       </pre>
//       <h3>JSON</h3>
//       <pre className="line-numbers">
//         <code className="language-json">{props.data_json}</code>
//       </pre>
//   `

// const asdf = (
//   <Script
//     strategy="afterInteractive"
//     dangerouslySetInnerHTML={{
//       __html: props.script_js,
//     }}
//   />
// )
