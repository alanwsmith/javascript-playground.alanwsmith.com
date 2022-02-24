import HeadTag from '../components/HeadTag'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <HeadTag
        description="A place for me to mess around with JavaScript to get a better understanding of how it works."
        image="https://res.cloudinary.com/awsimages/image/upload/og-images/js-playground-home.png"
        title="The JS Playground Of Alan"
        type="website"
        url="https://js-playground.alanwsmith.com"
      />
      <h2>The JS Playground Of Alan</h2>
      <p>
        This is a place for me to mess around with javascript to get a better
        understanding of how it works
      </p>
      <ul>
        <li>
          <Link href="/get-a-substring-from-a-string">
            <a>get-a-substring-from-a-string</a>
          </Link>
        </li>
        <li>
          <Link href="/update-innner-html-without-moving-view">
            <a>update-innner-html-without-moving-view</a>
          </Link>
        </li>
        <li>
          <Link href="/random-number">
            <a>Random Number</a>
          </Link>
        </li>
        <li>
          <Link href="/random-number-with-min-max">
            <a>Random Number With Minimum And Maximum</a>
          </Link>
        </li>
      </ul>
    </>
  )
}
