import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import styles from './Folder.module.css'

type FolderProps = {
  title?: string
  isOpen?: boolean
  onToggle?: () => void
  hint?: string
  children?: ReactNode
}

export default function Folder({
  title = 'Projects',
  isOpen = false,
  onToggle,
  hint,
  children
}: FolderProps) {
  const isInteractive = Boolean(onToggle)

  return (
    <div className={styles.wrapper}>
      <motion.button
        type="button"
        className={styles.header}
        onClick={onToggle}
        disabled={!isInteractive}
        aria-expanded={isOpen}
        whileHover={isInteractive ? { y: -2 } : undefined}
        whileTap={isInteractive ? { scale: 0.99 } : undefined}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <span className={styles.tab} aria-hidden="true" />
        <span className={styles.title}>{title}</span>
        {hint ? <span className={styles.hint}>{hint}</span> : null}
      </motion.button>

      {/* TODO: Replace placeholder open/close behavior with cinematic folder animation. */}
      <motion.div
        className={styles.body}
        animate={{ maxHeight: isOpen ? 440 : 0, opacity: isOpen ? 1 : 0 }}
        initial={false}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className={styles.content}>{children}</div>
      </motion.div>
    </div>
  )
}
