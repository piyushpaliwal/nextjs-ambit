import type { HomePageData } from 'types/pages'
import { LocaleEnum } from 'types/locale'
import { enHomeRegistry } from './en'
import { gbHomeRegistry } from './en-GB'
import { usHomeRegistry } from './en-US'

export const homeRegistryMap: Record<LocaleEnum, HomePageData> = {
  [LocaleEnum.Global]: enHomeRegistry,
  [LocaleEnum.US]: usHomeRegistry,
  [LocaleEnum.GB]: gbHomeRegistry
}
