import type { Namespace } from 'i18next'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { LocaleEnum } from 'types/locale'
import { recursivelyTranslate } from '../utils/transformer'

export const usePageData = <T>(registryMap: Record<string, T>, namespace: Namespace) => {
  const { t } = useTranslation(namespace)
  const { locale, defaultLocale } = useRouter()

  const activeLocale = (locale || defaultLocale || LocaleEnum.Global) as string

  const registryData = registryMap[activeLocale] || registryMap[LocaleEnum.Global]

  return recursivelyTranslate(registryData, t) as unknown as T
}
