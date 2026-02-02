import type { GetStaticPaths, GetStaticProps } from 'next'
import { projects, getProjectBySlug, type Project } from '../../data/projects'
import styles from '../../styles/ProjectDetail.module.css'

type ProjectDetailProps = {
  project: Project
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <span className={styles.kicker}>Project</span>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.description}>{project.description}</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tech Stack</h2>
          <div className={styles.stack}>
            {project.stack.map((item) => (
              <span key={item} className={styles.stackItem}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Links</h2>
          <div className={styles.links}>
            {project.links.map((link) => (
              <a key={link.label} className={styles.link} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </section>

        {/* TODO: Add gallery, screenshots, and motion studies for the project. */}
      </div>
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<ProjectDetailProps> = async (context) => {
  const slug = context.params?.slug

  if (typeof slug !== 'string') {
    return { notFound: true }
  }

  const project = getProjectBySlug(slug)

  if (!project) {
    return { notFound: true }
  }

  return {
    props: {
      project
    }
  }
}
