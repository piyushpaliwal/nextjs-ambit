import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { LocaleEnum } from 'types/locale'
import type { I18nNamespaces } from '../../@types/i18next'

export const getI18nStaticProps = (folderName: string, namespaces: (keyof I18nNamespaces)[]): GetStaticProps => {
  return async ({ locale }) => {
    const activeLocale = (locale as LocaleEnum) || LocaleEnum.Global

    try {
      const pageModule = await import(`data/registries/${folderName}/${activeLocale}`)

      return {
        props: {
          ...(await serverSideTranslations(activeLocale, namespaces as unknown as 'common'[])),
          rawData: {
            ...pageModule.default
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
