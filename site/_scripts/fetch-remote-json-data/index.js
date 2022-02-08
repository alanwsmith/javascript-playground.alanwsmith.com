// import fs from 'fs'
// import Script from 'next/script'
import { useEffect } from 'react'

import Highlight, { defaultProps } from 'prism-react-renderer'

import theme from 'prism-react-renderer/themes/nightOwl'

import styled from 'styled-components'

// import Prism from 'prismjs'

// import 'prismjs/themes/prism-okaidia.css'
// import 'prismjs/components/prism-jsx.js'
// import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

///////////////////////////////////////////////////////////
// Work in progress
//////////////////////////////////////////////////////////

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
`

const Line = styled.div`
  display: table-row;
`

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`

const LineContent = styled.span`
  display: table-cell;
`

// export default function Page(props) {
export default function Page() {
  // useEffect(() => {
  //   Prism.highlightAll()
  // }, [])

  // const holder = (
  //   <div
  //     dangerouslySetInnerHTML={{
  //       __html: props.content_html,
  //     }}
  //   />
  // )

  // {holder}
  //

  const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`

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
              <div key={`code_line_${i}`} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={`code_line_span_${i}`} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <pre className="line-numbers">
        <code className="language-jsx">asdf</code>
      </pre>
      <h3>Output</h3>
    </div>
  )
}

// <code className="language-html">{props.content_html}</code>

// export async function getStaticProps(context) {
//   function loadFileAsString(path) {
//     try {
//       const fileText = fs.readFileSync(path, `utf8`)
//       return fileText
//     } catch (err) {
//       return `Could not load: ${path}`
//     }
//   }
//   return {
//     props: {
//       content_html: loadFileAsString(
//         `./pages/fetch-remote-json-data/content.html`
//       ),
//       script_js: loadFileAsString(`./pages/fetch-remote-json-data/script.js`),
//       data_json: loadFileAsString(`./pages/fetch-remote-json-data/data.json`),
//     },
//   }
// }

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
