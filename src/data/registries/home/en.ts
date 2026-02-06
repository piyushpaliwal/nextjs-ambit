import type { HeaderProps } from 'components/blocks/header/Header'
import type { HeroProps } from 'components/blocks/hero/Hero'
import { definePageData, type HomePageData } from 'types/pages'
import { headerProps, heroProps } from './shared'

const enHomeRegistry: HomePageData = definePageData<HomePageData>({
  headerProps: headerProps as unknown as HeaderProps,
  heroProps: heroProps as unknown as HeroProps
})

export default enHomeRegistry
