import type { HomePageData } from 'types/pages'
import { LocaleEnum } from 'types/locale'
import { usBusinessStructureAdvisoryRegistry } from './en-US'
import { gbBusinessStructureAdvisoryRegistry } from './en-GB'

export const businessStructureAdvisoryRegistryMap: Partial<Record<LocaleEnum, HomePageData>> = {
  [LocaleEnum.US]: usBusinessStructureAdvisoryRegistry,
  [LocaleEnum.GB]: gbBusinessStructureAdvisoryRegistry
}
