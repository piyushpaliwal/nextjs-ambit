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

import type accountingBookkeepingUS from '../public/locales/en-US/accountingBookkeeping.json'
import type accountingBookkeepingGB from '../public/locales/en-GB/accountingBookkeeping.json'

import type taxAdvisoryUS from '../public/locales/en-US/taxAdvisory.json'
import type taxAdvisoryGB from '../public/locales/en-GB/taxAdvisory.json'

import type specializedTaxUS from '../public/locales/en-US/specializedTax.json'

import type payrollEmploymentTaxUS from '../public/locales/en-US/payrollEmploymentTax.json'

import type monthlyRetainerUS from '../public/locales/en-US/monthlyRetainer.json'
import type monthlyRetainerGB from '../public/locales/en-GB/monthlyRetainer.json'

import type remoteStaffingUS from '../public/locales/en-US/remoteStaffing.json'
import type remoteStaffingGB from '../public/locales/en-GB/remoteStaffing.json'

import type systemsIntegrationTechSupportUS from '../public/locales/en-US/systemsIntegrationTechSupport.json'
import type systemsIntegrationTechSupportGB from '../public/locales/en-GB/systemsIntegrationTechSupport.json'

import type internationalAdvisoryUS from '../public/locales/en-US/internationalAdvisory.json'

import type businessLifecycleAdvisoryGB from '../public/locales/en-GB/businessLifecycleAdvisory.json'

import type payrollExecutionGB from '../public/locales/en-GB/payrollExecution.json'

import type ecommerceUS from '../public/locales/en-US/ecommerce.json'

import type constructionUS from '../public/locales/en-US/construction.json'

import type hospitalityUS from '../public/locales/en-US/hospitality.json'

// 2. Define the interface for your resources
export interface I18nNamespaces {
  common: typeof commonUS & typeof commonGB
  home: typeof homeUS & typeof homeGB
  footer: typeof footer
  businessStructureAdvisory: typeof businessStructureAdvisoryUS & typeof businessStructureAdvisoryGB
  formationAndSetup: typeof formationAndSetupUS & typeof formationAndSetupGB
  accountingBookkeeping: typeof accountingBookkeepingUS & typeof accountingBookkeepingGB
  taxAdvisory: typeof taxAdvisoryUS & typeof taxAdvisoryGB
  specializedTax: typeof specializedTaxUS
  payrollEmploymentTax: typeof payrollEmploymentTaxUS
  monthlyRetainer: typeof monthlyRetainerUS & typeof monthlyRetainerGB
  remoteStaffing: typeof remoteStaffingUS & typeof remoteStaffingGB
  systemsIntegrationTechSupport: typeof systemsIntegrationTechSupportUS & typeof systemsIntegrationTechSupportGB
  internationalAdvisory: typeof internationalAdvisoryUS
  businessLifecycleAdvisory: typeof businessLifecycleAdvisoryGB
  payrollExecution: typeof payrollExecutionGB
  ecommerce: typeof ecommerceUS
  construction: typeof constructionUS
  hospitality: typeof hospitalityUS
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
