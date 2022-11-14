import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/ctclogo.png" alt="crave the cave logo" className={styles.logo} />
      </footer>
    </>
  )
}
