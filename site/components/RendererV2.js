import Script from 'next/script'
import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'

export default function RendererV2({ example, language }) {
  const snippet_id = `snippet_${example.output}`
  const runCode = `
${example.snippet}
document.getElementById('${snippet_id}').innerText = ${example.output}`

  return (
    <>
      <textarea
        id={`${snippet_id}_code`}
        value={example.snippet.trim()}
        readOnly={true}
        style={{ position: 'absolute', left: '-9000px' }}
      ></textarea>
      <Highlight
        {...defaultProps}
        theme={nightOwl}
        code={example.snippet.trim()}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <>
            <pre className={`${className} code_block`}>
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({ line, key: i })}
                  className="token-line code_line"
                >
                  {tokens.length > 1 ? (
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
                  ) : (
                    ''
                  )}
                  <span
                    className={
                      tokens.length > 1
                        ? `code_line_content`
                        : `code_line_content_single_line`
                    }
                  >
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              ))}

              <button
                className="copy-button"
                onClick={() => {
                  const code_text = document.getElementById(
                    `${snippet_id}_code`
                  )
                  code_text.select()
                  document.execCommand('copy')
                }}
                style={{ position: 'absolute', top: 0, right: 0, opacity: 0.3 }}
              >
                Copy
              </button>
            </pre>
          </>
        )}
      </Highlight>

      <Highlight
        {...defaultProps}
        theme={nightOwl}
        code={`console.log(${example.output})`}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <>
            <pre className={`${className} code_console_log_block`}>
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({ line, key: i })}
                  className="token-line code_line"
                >
                  <span className="code_line_number_blank">
                    .<br />.
                  </span>
                  <span className={`code_line_content`}>
                    <br />
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
            <pre className="code_block_output">
              <span className={`code_line_number_output`}>&gt;</span>
              <span id={snippet_id} className={`code_line_content`}></span>
            </pre>
          </>
        )}
      </Highlight>
      <Script
        id={`script_${snippet_id}`}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: runCode,
        }}
      />
    </>
  )
}
