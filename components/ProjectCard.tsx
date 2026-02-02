import Link from 'next/link'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  title: string
  description: string
  slug: string
  stack?: string[]
}

export default function ProjectCard({ title, description, slug, stack = [] }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className={styles.card}>
      {/* TODO: Replace with final project thumbnail or file icon. */}
      <div className={styles.header}>
        <span className={styles.file} aria-hidden="true" />
        <h3 className={styles.title}>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
      {stack.length > 0 ? (
        <div className={styles.stack}>
          {stack.map((item) => (
            <span key={item} className={styles.stackItem}>
              {item}
            </span>
          ))}
        </div>
      ) : null}
    </Link>
  )
}
