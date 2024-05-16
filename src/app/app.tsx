import {
  NewspaperIcon,
  CakeIcon,
  ShoppingCartIcon,
  ArrowTrendingUpIcon,
  PencilSquareIcon,
  KeyIcon,
  CommandLineIcon,
  PlayIcon,
  SpeakerWaveIcon,
} from '@heroicons/react/24/outline'
import {
  PlayCircleIcon, ArrowPathIcon,
  ForwardIcon
} from '@heroicons/react/24/solid'
import { useState } from 'react'

import Card from 'components/organisms/card'
import styles from './app.module.css'

// const CONSTANTS = {
//   name: 'Abhishek Khanna',
//   githubProfileLink: 'https://github.com/assaultkoder95',
// }

const prompts = [
  {
    name: 'Add the book Zero to One',
    description:
      'in my amazon cart',
    logo: ShoppingCartIcon,
  },
  {
    name: 'What\'s the top post',
    description: 'on Hacker News?',
    logo: NewspaperIcon,
  },
  {
    name: 'Reserve a table at Fogo de Chão',
    description:
      'in San hose for 2 people using OpenTable',
    logo: CakeIcon,
  },
  {
    name: 'How much did Nvidia\'s stock',
    description: 'gain today?',
    logo: ArrowTrendingUpIcon,
  },
];

const steps = [
  {
    name: '',
    description:
      'Type in a query or choose one of the examples on the chat interface to get started',
    logo: CommandLineIcon,
  },
  {
    name: '',
    description: 'We support some websites that require authentication in which case a login button will appear',
    logo: KeyIcon,
  },
  {
    name: '',
    description:
      'You may interact with the screen to take over control or correct the agent',
    logo: PencilSquareIcon,
  },
];

const App = (): JSX.Element => {
  const [iframeState, updateIframeState] = useState(false);

  const openIframeHandler = () => {
    updateIframeState(state => !state);
  }

  return (
    <main className={styles.main}>
      {/* <header className={styles.header}>
        <h3 className={styles.headerTopTitle}>
          <span className={styles.headerTopTitleVital}>Multi Modal Web Agent</span> @ Chima
        </h3>
      </header> */}
      <section className={styles.layout}>
        <section className={styles.prompts}>
          {prompts.map((props, index) => (
            <div
              key={index}
              className={styles.cardWrapper}
              style={{ animationDelay: `${index * 0.1 + 0.1}s`, height: 0 }}
            >
              <Card
                title={props.name}
                description={props.description}
                Icon={props.logo}
                type="feature"
              />
            </div>
          ))}
          <div className={styles.searchForm}>
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Write a command..."
              style={{ background: '#f1f1f1', marginBottom: '10px' }}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <SpeakerWaveIcon />
            </div>

            <div className="grid grid-cols-3 divide-x">
              <span className="text-center">
                <ArrowPathIcon className={styles.icon} aria-hidden="true" />
                Start Over
              </span>
              <span>
                <PlayCircleIcon
                  className={styles.icon}
                  style={{ color: '#3c82f6', height: '3rem', width: '3rem' }}
                  aria-hidden="true"
                  onClick={openIframeHandler}
                />
              </span>
              <span className="text-center">
                <ForwardIcon className={styles.icon} aria-hidden="true" />
                Step
              </span>
            </div>
          </div>
        </section>
        <section className={styles.frame}>
          {!iframeState && <div>
            <div style={{ textAlign: 'center', color: '#c2c2c2' }}>
              <PlayIcon className={styles.icon} aria-hidden="true" style={{ color: '#c2c2c2', height: '2rem', width: '2rem' }} />
              <h1 style={{ fontSize: '2rem' }}> Playground </h1>
              <p style={{ fontWeight: 500, marginBottom: 25 }}> Your live preview will start here. To get started: </p>
            </div>
            <div className={styles.stepsWrapper}>
              {steps.map((props, index) => (
                <div
                  key={index}
                  className={styles.cardWrapper}
                  style={{
                    animationDelay: `${index * 0.1 + 0.1}s`,
                    textAlign: 'left',
                  }}
                >
                  <Card
                    title={props.name}
                    description={props.description}
                    Icon={props.logo}
                    type="listing"
                  />
                </div>
              ))}
            </div>
          </div>}

          {iframeState && <div>
            <iframe src='https://multimodal-web-agent-bice.vercel.app/' title='Multi Modal Web Agent' width='100%' height='100%'></iframe>
          </div>}
        </section>
      </section>

      {/* <footer className={styles.footer}>
        <a href={CONSTANTS.githubProfileLink} target="_blank" rel="noreferrer">
          {CONSTANTS.name} @ {new Date().getFullYear()}
        </a>
      </footer> */}
    </main>
  )
}

export default App
