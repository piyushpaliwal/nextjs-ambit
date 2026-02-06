import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import { recursivelyTranslate } from 'utils/transformer'
import type { Namespace } from 'i18next'
import type { Translated } from 'types/transformer'

export function useTransformedData<T>(rawData: T, namespace: Namespace): Translated<T> {
  // CAST TO ANY: This is a workaround for TypeScript 4.9 "Excessively deep instantiation" errors.
  // The 'Namespace' type can be a complex union, creating a heavy 'TFunction'. When passed into
  // our recursive 'Translated<T>' logic, it exhausts the compiler's depth limit (approx 50).
  //
  // Casting to 'any' simplifies the 't' function signature, preventing the crash.
  // This can potentially be removed after upgrading to TypeScript 5+
  const { t } = useTranslation(namespace as any)

  return useMemo(() => {
    if (!rawData) return rawData as unknown as Translated<T>

    return recursivelyTranslate(rawData, t) as unknown as Translated<T>
  }, [rawData, t])
}
