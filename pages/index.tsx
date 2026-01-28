import HomeDefault from 'components/home/HomeDefault'
import HomeLocale from 'components/home/HomeLocale'
import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { LocaleEnum } from 'types/locale'
import type { I18nNamespaces } from '../@types/i18next'

// Import your different layouts

const Index: NextPage = () => {
  const { locale } = useRouter()

  // ROUTING LOGIC: Switch component based on locale
  switch (locale as LocaleEnum) {
    case LocaleEnum.Global:
      return <HomeDefault />
    default:
      return <HomeLocale />
  }
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const ns: (keyof I18nNamespaces)[] = ['common', 'home', 'footer']
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ns as unknown as 'common'[]))
    }
  }
}

export default Index
