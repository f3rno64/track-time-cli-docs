import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Heading from '@theme/Heading'

import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="flex justify-center align-center">
          <img
            className="h-[400px]"
            src="/img/terminal_screenshots/tt_l_humanized.svg"
            alt="Output of list command"
          ></img>
        </div>

        <Heading as="h1" className="py-4">
          {siteConfig.title}
        </Heading>

        <p className="text-xl font-semibold pb-4">{siteConfig.tagline}</p>
        <p className="mx-auto max-w-4xl text-2xl font-bold pb-8">Supports natural language entry start/end time specification and has many commands to analyize historical activity &amp; performance.</p>

        <div className="flex align-center justify-center">
          <Link
            className="py-4 px-8 bg-white shadow-md rounded-md text-center text-xl font-semibold text-black mr-8"
            to="/docs/intro"
          >
            Read the Docs
          </Link>
          <Link
            className="py-4 px-8 bg-red-500 shadow-md rounded-md text-center text-xl font-semibold text-white hover:text-white"
            to="https://www.npmjs.com/package/track-time-cli"
          >
            npm i -g track-time-cli
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <div className="bg-slate-800 rounded-md p-8 mt-8">
        <div className="flex justify-center align-center">
          <img
            width="800"
            src="/img/terminal_screenshots/help.svg"
            alt="Output of list command"
          ></img>

          <img
            width="800"
            src="/img/terminal_screenshots/tt_w_humanized.svg"
            alt="Output of week command"
          ></img>
        </div>
      </div>
    </Layout>
  )
}
