import { FooterProps } from 'components/blocks/footer/Footer'
import HomeDefault from 'components/home/HomeDefault'
import HomeLocale from 'components/home/HomeLocale'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { LocaleEnum } from 'types/locale'
import type { HomePageData } from 'types/pages'
import { getI18nStaticProps } from 'utils/i18n-ssr'

interface Props {
  rawData: HomePageData & { footerData: FooterProps }
}

export const getStaticProps = getI18nStaticProps('home', ['home'])

const Index: NextPage<Props> = ({ rawData }) => {
  const { locale } = useRouter()

  switch (locale as LocaleEnum) {
    case LocaleEnum.Global:
      return <HomeDefault rawData={rawData} />
    default:
      return <HomeLocale rawData={rawData} />
  }
}

export default Index
