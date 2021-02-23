import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile"
import { CompletedChallanges } from "../components/CompletedChallanges"
import styles from "../styles/pages/Home.module.css"
import { Countdown } from "../components/Countdown";
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Timez</title>
      </Head>

     
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallanges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  )
}
