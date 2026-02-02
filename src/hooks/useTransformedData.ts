import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import { recursivelyTranslate } from 'utils/transformer'
import type { Namespace } from 'i18next'
import type { Translated } from 'types/transformer'

export function useTransformedData<T>(rawData: T, namespace: Namespace): Translated<T> {
  const { t } = useTranslation(namespace)

  return useMemo(() => {
    if (!rawData) return rawData as unknown as Translated<T>

    return recursivelyTranslate(rawData, t)
  }, [rawData, t])
}
