import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroProps } from 'components/blocks/hero/Hero'
import type { HomePageData } from 'types/pages'
import { headerProps, heroProps } from './shared'

export const enHomeRegistry: HomePageData = {
  headerProps: headerProps as unknown as HeaderProps,
  heroProps: heroProps as unknown as HeroProps
}
