import HomeDefault from 'components/home/HomeDefault'
import HomeUK from 'components/home/HomeUK'
import HomeUS from 'components/home/HomeUS'
import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

// Import your different layouts

const Index: NextPage = () => {
  const router = useRouter()
  const { locale } = router

  // ROUTING LOGIC: Switch component based on locale
  switch (locale) {
    case 'en-GB':
      return <HomeUK />
    case 'en-US':
      return <HomeUS />
    case 'en':
    default:
      return <HomeDefault />
  }
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common']))
  }
})

export default Index
