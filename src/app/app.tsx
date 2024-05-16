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
  ArrowPathIcon,
  ForwardIcon
} from '@heroicons/react/24/outline'
import { PlayCircleIcon } from '@heroicons/react/24/solid'

// import Button from 'components/atoms/button'
// import Logos from 'components/atoms/logos'
// import CopyButton from 'components/molecules/copy-button'
import Card from 'components/organisms/card'
import styles from './app.module.css'

const CONSTANTS = {
  name: 'Abhishek Khanna',
  githubProfileLink: 'https://github.com/assaultkoder95',
}

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
    name: 'Type in a query ',
    description:
      'or choose one of the examples on the chat interface to get started',
    logo: CommandLineIcon,
  },
  {
    name: 'We support some websites that require authentication in which case a login button will appear',
    description: '',
    logo: KeyIcon,
  },
  {
    name: 'You may interact with the screen to take over control or correct the agent',
    description:
      'in San hose for 2 people using OpenTable',
    logo: PencilSquareIcon,
  },
];


const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h3 className={styles.headerTopTitle}>
          <span className={styles.headerTopTitleVital}>Multi Modal Web Agent</span> @ Chima
        </h3>
      </header>
      <section className={styles.layout}>
        <section className={styles.prompts}>
          {prompts.map((props, index) => (
            <div
              key={index}
              className={styles.cardWrapper}
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <Card
                title={props.name}
                description={props.description}
                Icon={props.logo}
                type='feature'
              />
            </div>
          ))}
        </section>
        <section className={styles.frame}>
          <div style={{ textAlign: 'center' }}>
            <PlayIcon className={styles.icon} aria-hidden="true" />
            <h2> Playground </h2>
            <p> Your live preview will start here. To get started: </p>
          </div>

          {steps.map((props, index) => (
            <div
              key={index}
              className={styles.cardWrapper}
              style={{ animationDelay: `${index * 0.1 + 0.1}s`, textAlign: 'left' }}
            >
              <Card
                title={props.name}
                description={props.description}
                Icon={props.logo}
                type='listing'
              />
            </div>
          ))}
        </section>
      </section>

      <section className={styles.searchForm}>
        <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Type your query..." />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <SpeakerWaveIcon />
        </div>

        <div className='grid grid-cols-3 divide-x'>
          <span className='text-center'>
            <ArrowPathIcon className={styles.icon} aria-hidden="true" />
            Start Over
          </span>
          <span>
            <PlayCircleIcon className={styles.icon} style={{ color: '#3c82f6' }} aria-hidden="true" />
          </span>
          <span className='text-center'>
            <ForwardIcon className={styles.icon} aria-hidden="true" />
            Step
          </span>
        </div>
      </section>

      <footer className={styles.footer}>
        <a href={CONSTANTS.githubProfileLink} target="_blank" rel="noreferrer">
          {CONSTANTS.name} @ {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  )
}

export default App
