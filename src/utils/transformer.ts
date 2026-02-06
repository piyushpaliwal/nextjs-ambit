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
  if (!data || typeof data !== 'object') {
    return data as unknown as Translated<T>
  }

  if (Array.isArray(data)) {
    return data.map((item) => recursivelyTranslate(item, t)) as unknown as Translated<T>
  }

  const result: Record<string, any> = {}

  for (const [key, value] of Object.entries(data)) {
    if (key.endsWith('Key')) {
      const newKey = key.slice(0, -3)
      if (typeof value === 'string') {
        result[newKey] = (t as any)(value)
      } else if (Array.isArray(value)) {
        result[newKey] = translateArray(value, t)
      } else {
        result[newKey] = recursivelyTranslate(value, t)
      }
    } else {
      result[key] = recursivelyTranslate(value, t)
    }
  }
  return result as Translated<T>
}
