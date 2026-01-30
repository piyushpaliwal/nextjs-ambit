import type { Namespace, TFunction } from 'i18next'
import type { Translated } from 'types/transformer'

const isObject = (val: any) => val && typeof val === 'object' && !Array.isArray(val)

const translateArray = <N extends Namespace>(arr: any[], t: TFunction<N, undefined>): any[] => {
  return arr.map((item) => {
    if (isObject(item)) {
      return recursivelyTranslate(item, t)
    }
    if (Array.isArray(item)) return translateArray(item, t) // Recurse for string[][]
    if (typeof item === 'string') return (t as any)(item) // Translate string
    return item
  })
}

export const recursivelyTranslate = <T, N extends Namespace>(data: T, t: TFunction<N, undefined>): Translated<T> => {
  if (Array.isArray(data)) {
    return data.map((item) => recursivelyTranslate(item, t)) as unknown as Translated<T>
  }

  if (isObject(data)) {
    const transformed: any = {}

    Object.keys(data as object).forEach((key) => {
      const value = (data as any)[key]

      if (key.endsWith('Key')) {
        const newKey = key.replace(/Key$/, '')
        if (typeof value === 'string') {
          transformed[newKey] = (t as any)(value)
        } else if (Array.isArray(value)) {
          transformed[newKey] = translateArray(value, t)
        }
      } else {
        transformed[key] = recursivelyTranslate(value, t)
      }
    })

    return transformed as Translated<T>
  }

  return data as unknown as Translated<T>
}
