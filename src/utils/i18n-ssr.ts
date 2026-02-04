import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { LocaleEnum } from 'types/locale'
import type { I18nNamespaces } from '../../@types/i18next'

export const getI18nStaticProps = (folderName: string, namespaces: (keyof I18nNamespaces)[]): GetStaticProps => {
  return async ({ locale }) => {
    const activeLocale = (locale as LocaleEnum) || LocaleEnum.Global

    try {
      const allNamespaces = Array.from(new Set([...namespaces, 'common', 'footer']))

      const [pageModule, footerModule, translationData] = await Promise.all([
        import(`data/registries/${folderName}/${activeLocale}`),
        import(`data/registries/common/footer/${activeLocale}`).catch(() => ({ default: null })),
        serverSideTranslations(activeLocale, allNamespaces as unknown as 'common'[])
      ])

      return {
        props: {
          ...translationData,
          rawData: {
            ...pageModule.default,
            footerData: footerModule.default
          }
        }
      }
    } catch (error) {
      return {
        notFound: true
      }
    }
  }
}
