import { useState } from 'react'
import Folder from '../../components/Folder'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../data/projects'
import styles from '../../styles/ProjectsPage.module.css'

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Folder
          title="Projects"
          isOpen={isOpen}
          onToggle={() => setIsOpen((prev) => !prev)}
          hint={isOpen ? 'Open' : 'Closed'}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              slug={project.slug}
              stack={project.stack}
            />
          ))}
        </Folder>
        <p className={styles.notice}>Click the folder to open the files.</p>
      </div>
    </main>
  )
}
