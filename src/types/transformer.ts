import type { Namespace, ParseKeys } from 'i18next'
import type { ComponentType, ReactElement } from 'react'

type StripNodeKey<K> = K extends `${infer P}Key` ? P : K

export type Translated<T> = T extends ((...args: any[]) => any) | ComponentType<any> | ReactElement
  ? T
  : T extends Array<infer U>
    ? Array<Translated<U>>
    : T extends object
      ? {
          [K in keyof T as StripNodeKey<K>]: K extends `${string}Key`
            ? NonNullable<T[K]> extends Array<any>
              ? T[K]
              : string
            : Translated<T[K]>
        }
      : T

type IsObject<T> = T extends object ? (T extends Function ? false : T extends Array<any> ? false : true) : false

type MapToKey<T, NS extends Namespace> =
  NonNullable<T> extends string
    ? ParseKeys<NS>
    : NonNullable<T> extends Array<infer U>
      ? Array<MapToKey<U, NS>>
      : IsObject<NonNullable<T>> extends true
        ? RegistryFor<NonNullable<T>, NS>
        : T

export type RegistryFor<T, NS extends Namespace = 'common'> = {
  [K in keyof T as `${string & K}Key`]?: MapToKey<T[K], NS>
} & {
  [K in keyof T]?: T[K]
}
