import GlobeTwo from 'icons/solid-mono/GlobeTwo'
import { useRouter } from 'next/router'
import { ChangeEvent, FC, useState } from 'react'
import IconProps from 'types/icon'

type Locale = {
  label: string
  locale: string
  icon: FC<IconProps>
}

const localeSet: Locale[] = [
  {
    label: 'English (Global)',
    locale: 'en',
    icon: GlobeTwo
  },
  {
    label: 'English (US)',
    locale: 'en-US',
    icon: GlobeTwo
  },
  {
    label: 'English (UK)',
    locale: 'en-GB',
    icon: GlobeTwo
  }
]

const Language: FC = () => {
  const router = useRouter()
  const { pathname, asPath, query, locale } = router

  const activeLocale = localeSet.find((loc) => loc.locale === locale)

  const handleChange = (locale: Locale) => {
    // Push the new locale while preserving the dynamic route state
    router.push({ pathname, query }, asPath, { locale: locale.locale })
  }

  return (
    <li className="nav-item dropdown language-select text-uppercase">
      <a
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        className="nav-link dropdown-item dropdown-toggle"
        title="Select Language"
      >
        {activeLocale?.icon && <activeLocale.icon className="h-5 w-5" />}
      </a>
      <ul className="dropdown-menu">
        {localeSet?.map((loc) => (
          <li className="nav-item" key={loc.locale}>
            <button className="dropdown-item" onClick={() => handleChange(loc)} title={loc.label}>
              {loc.label}
            </button>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default Language
