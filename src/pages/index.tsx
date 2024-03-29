import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import Heading from '@theme/Heading'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  const { title, tagline } = siteConfig

  return (
    <Layout
      title={title}
      description="track-time-cli is a CLI utility for tracking your time. It supports natural language input and has many commands to analyze historical activity."
    >
      <header className="py-16">
        <div className="flex items-center justify-center">
          <div className="w-full">
            <div className="flex-col items-center justify-center mx-auto">
              <Heading as="h1" className="pb-4 font-bold text-center">
                {title}
              </Heading>

              <p className="text-xl font-semibold pb-16 text-center">
                {tagline}
              </p>

              <div className="flex align-center justify-center">
                <Link
                  to="/docs/install"
                  className="py-4 px-8 bg-white shadow-md rounded-md text-center text-xl font-semibold text-black mr-8"
                >
                  Read the Docs
                </Link>

                <Link
                  to="https://www.npmjs.com/package/track-time-cli"
                  className="py-4 px-8 bg-red-500 shadow-md rounded-md text-center text-xl font-semibold text-white hover:text-white"
                >
                  npm i -g track-time-cli
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-col justify-center align-center w-full shrink-0">
            <div>
              <img
                width="80%"
                className="mx-auto mb-8"
                alt="Output of `tt l -h -c`"
                src="/img/terminal_screenshots/tt_l_concise_humanized.svg"
              ></img>
            </div>

            <div>
              <img
                width="80%"
                className="mx-auto"
                alt="Output of `tt l -h -c`"
                src="/img/terminal_screenshots/tt_b.svg"
              ></img>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  )
}
