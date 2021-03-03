import { ExperienceBar } from "../components/ExperienceBar";
import Profile from "../components/Profile/index";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile /> 
          <CompletedChallenges />
          <CountDown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}