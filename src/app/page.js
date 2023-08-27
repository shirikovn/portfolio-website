import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.lightSection}>
        <p className={styles.lightText}>
          My name is Shirikov Nikita
        </p>
        <p className={styles.attentionText}>
          Hi
        </p>
        <p className={styles.normalLightText}>
          and this is my website, feel cozy
        </p>
      </section>
      <section className={styles.bioSection}>
        <p className={styles.itemAboutMe}>
          I am web-developer and CS HSE student
        </p>
        <p className={styles.itemAboutMe2}>
          I belive that studying is practice
        </p>
        <a href="https://github.com/PlatinaEnjoyer" className={styles.ga}>
          so all info about me you can find here
        </a>
      </section>
      <section className={styles.contactSection}>
        <p className={styles.contactText1}>
          Contacts
        </p>
        <p className={styles.contactText2}>
          telegram: @SNick5
        </p>
        <p className={styles.contactText3}>
          github: PlatinaEnjoyer
        </p>
        <p className={styles.contactText3}>
          mail: shirikovn@mail.ru
        </p>
      </section>
    </main>
  )
}
