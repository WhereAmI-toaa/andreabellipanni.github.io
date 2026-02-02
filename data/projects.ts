export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  slug: string
  title: string
  description: string
  stack: string[]
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    slug: 'project-one',
    title: 'Project One',
    description: 'A cinematic portfolio experiment with immersive interactions.',
    stack: ['Next.js', 'TypeScript', 'Framer Motion'],
    // TODO: Replace placeholder links with real URLs.
    links: [
      { label: 'Live', href: '#' },
      { label: 'GitHub', href: '#' }
    ]
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    description: 'Minimal UI study focused on motion, depth, and storytelling.',
    stack: ['React', 'GSAP', 'CSS Modules'],
    // TODO: Replace placeholder links with real URLs.
    links: [
      { label: 'Case Study', href: '#' }
    ]
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    description: 'A modular design system for interactive product launches.',
    stack: ['Next.js', 'MDX', 'Storybook'],
    // TODO: Replace placeholder links with real URLs.
    links: [
      { label: 'Docs', href: '#' }
    ]
  }
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) || null
}
