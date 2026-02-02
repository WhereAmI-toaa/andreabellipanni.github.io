import { motion } from 'framer-motion'
import styles from './Hero.module.css'

type HeroProps = {
  onEnter: () => void
}

export default function Hero({ onEnter }: HeroProps) {
  return (
    <section className={styles.hero}>
      <motion.button
        type="button"
        className={styles.card}
        onClick={onEnter}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {/* TODO: Replace placeholder card with hanging tag visuals + drop animation. */}
        <span className={styles.kicker}>Portfolio</span>
        <h1 className={styles.title}>Enter the Studio</h1>
        <p className={styles.subtitle}>Click to open the profile.</p>
      </motion.button>
    </section>
  )
}
