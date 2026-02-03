import ProfileCard from '../components/ProfileCard'
import Folder from '../components/Folder'
import styles from '../styles/ProfilePage.module.css'

export default function Profile() {
  const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const trimmedBasePath = rawBasePath.replace(/^\/+/, '').replace(/\/+$/, '')
  const basePath = trimmedBasePath ? `/${trimmedBasePath}` : ''

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <ProfileCard
          name="Andrea Bellipanni"
          title="Data Scientist"
          handle="andreabellipannii"
          status="Online"
          contactText="Contact Me"
          avatarUrl={`${basePath}/images/profile-avatar.svg`}
          showUserInfo
          enableTilt
          enableMobileTilt={true}
          onContactClick={() => console.log('Contact clicked')}
          showBehindGlow
          behindGlowColor="rgba(125, 190, 255, 0.67)"
          customInnerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
        />
      </section>

      <section className={styles.section}>
        <p className={styles.copy}>Scroll down to reveal the project archive.</p>
        {/* TODO: Add scroll-triggered reveal for the folder component. */}
        <Folder title="Project Archive" isOpen={false} hint="Closed" />
      </section>
    </main>
  )
}
