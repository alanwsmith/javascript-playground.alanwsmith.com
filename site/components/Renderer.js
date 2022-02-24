


// TODO: Remove this and just use RendererV2



import Script from 'next/script'
import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import dracula from 'prism-react-renderer/themes/dracula'

export default function Renderer({ code, langauge }) {
  const regex = /console.log\((.*?)\)/
  const match = code.match(regex)
  const element_id = `id_${match[1]}`
  const runCode = code.replace(
    regex,
    `document.getElementById('${element_id}').innerText = $1`
  )

  // <pre className={`${className} code_block`} style={style}>
  //
  return (
    <>
      <Highlight
        {...defaultProps}
        theme={dracula}
        code={code.trim()}
        language={'jsx'}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <>
            <pre className={`${className} code_block`} style={style}>
              <button
                onClick={() => {
                  const code_text = document.getElementById(
                    `${element_id}_code`
                  )
                  code_text.select()
                  document.execCommand('copy')
                  console.log('hasdf')
                }}
                style={{ position: 'absolute', top: 0, right: 0, opacity: 0.4 }}
              >
                Copy
              </button>
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({ line, key: i })}
                  className="token-line code_line"
                >
                  <span
                    className={
                      i === 0
                        ? `code_line_number code_line_number_first`
                        : i === tokens.length - 1
                        ? `code_line_number code_line_number_last`
                        : `code_line_number`
                    }
                  >
                    {i + 1}
                  </span>
                  <span className={`code_line_content`}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>

            <p>Example Output:</p>

            <pre className="code_block_output" style={style}>
              <code className="code_lines" id={element_id}></code>
            </pre>
          </>
        )}
      </Highlight>
      <textarea
        id={`${element_id}_code`}
        value={code.trim()}
        readOnly={true}
        style={{ position: 'absolute', left: '-9000px' }}
      ></textarea>

      <Script
        id={`${element_id}_script`}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: runCode,
        }}
      />
    </>
  )
}
