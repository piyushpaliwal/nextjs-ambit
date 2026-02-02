// @types/i18next.d.ts
import 'i18next'

// 1. Import your default language JSON files

import type commonUS from '../public/locales/en-US/common.json'
import type commonGB from '../public/locales/en-GB/common.json'

import type homeUS from '../public/locales/en-US/home.json'
import type homeGB from '../public/locales/en-GB/home.json'

import type footer from '../public/locales/en/footer.json'

import type businessStructureAdvisoryUS from '../public/locales/en-US/business-structure-advisory.json'
import type businessStructureAdvisoryGB from '../public/locales/en-GB/business-structure-advisory.json'

import type formationAndSetupUS from '../public/locales/en-US/formationAndSetup.json'
import type formationAndSetupGB from '../public/locales/en-GB/formationAndSetup.json'

// 2. Define the interface for your resources
export interface I18nNamespaces {
  common: typeof commonUS & typeof commonGB
  home: typeof homeUS & typeof homeGB
  footer: typeof footer
  businessStructureAdvisory: typeof businessStructureAdvisoryUS & typeof businessStructureAdvisoryGB
  formationAndSetup: typeof formationAndSetupUS & typeof formationAndSetupGB
}

// 3. Augment the 'i18next' module
declare module 'i18next' {
  interface CustomTypeOptions {
    // Set the default namespace (optional, but recommended)
    defaultNS: 'common'
    // Stick to your defined resources
    resources: I18nNamespaces
  }
}
