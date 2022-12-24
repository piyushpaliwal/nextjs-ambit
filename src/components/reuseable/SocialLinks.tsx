import { FC } from 'react'

// ========================================================
type SocialLinksProps = { className?: string }
// ========================================================

const links = [
  { id: 1, icon: 'uil uil-facebook-f', url: 'https://www.facebook.com/Ambit-KPO-Services-933763786660076/' },
  { id: 2, icon: 'uil uil-linkedin', url: 'https://www.linkedin.com/company/ambitkpo/' }
]

const SocialLinks: FC<SocialLinksProps> = ({ className = 'nav social social-white mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <i className={icon} />
        </a>
      ))}
    </nav>
  )
}

export default SocialLinks
