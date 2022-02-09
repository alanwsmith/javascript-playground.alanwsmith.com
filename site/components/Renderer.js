import Script from 'next/script'

export default function Renderer({ theCode }) {
  const regex = /console.log\((.*?)\)/
  const match = theCode.match(regex)
  const element_id = `id_${match[1]}`
  const runCode = theCode.replace(
    regex,
    `document.getElementById('${element_id}').innerText = $1`
  )

  return (
    <>
      <pre>
        <code>{theCode.trim()}</code>
      </pre>
      <p>Outputs:</p>
      <pre>
        <code id={element_id}></code>
      </pre>
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
