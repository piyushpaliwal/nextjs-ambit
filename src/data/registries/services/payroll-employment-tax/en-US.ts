import type { HeaderProps } from 'components/blocks/header/Header'
import type { Hero4Props } from 'components/blocks/hero/Hero4'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { BreadcrumbItem } from 'components/common/Breadcrumbs'
import type { CtaProps } from 'components/common/cta'
import { IconFolder } from 'types/icon'
import { definePageData, type PayrollEmploymentTaxData } from 'types/pages'
import type { RegistryFor } from 'types/transformer'

export const headerProps: RegistryFor<HeaderProps, 'payrollEmploymentTax'> = {
  titleKey: 'header.title',
  descriptionKey: 'header.description'
}

const breadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#', isActive: true },
  { label: 'Payroll & Employment Tax', href: 'services/payroll-employment-tax', isActive: true }
]

export const heroProps: RegistryFor<Hero4Props, 'payrollEmploymentTax'> = {
  titleKey: 'hero.title',
  subtitleKey: 'hero.subtitle',
  primaryHref: 'https://calendly.com/ambit-accounting/15min',
  primaryBtnText: 'Schedule Consultation',
  breadcrumbs: breadcrumbs
}

export const ctaProps: RegistryFor<CtaProps, 'payrollEmploymentTax'> = {
  titleKey: 'cta.title',
  buttonTitle: 'Request a Assessment'
}

const taxServiceSet: RegistryFor<AmbitService, 'payrollEmploymentTax'>[] = [
  {
    id: 1,
    titleKey: 'services.item1.title',
    iconConfig: {
      icon: 'Coin',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 2,
    titleKey: 'services.item2.title',
    iconConfig: {
      icon: 'CheckList',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 3,
    titleKey: 'services.item3.title',
    iconConfig: {
      icon: 'User',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 4,
    titleKey: 'services.item4.title',
    iconConfig: {
      icon: 'Calendar',
      folder: IconFolder.LINEAL
    }
  }
]

const serviceProps: RegistryFor<ServiceCallOutProps, 'payrollEmploymentTax'> = {
  titleKey: 'services.title',
  descriptionKey: 'services.description',
  ambitServiceSetKey: taxServiceSet
}

export const usPayrollEmploymentTaxData: PayrollEmploymentTaxData = definePageData<PayrollEmploymentTaxData>({
  headerProps: headerProps as unknown as HeaderProps,
  heroProps: heroProps as unknown as Hero4Props,
  serviceProps: serviceProps as unknown as ServiceCallOutProps,
  ctaProps: ctaProps as unknown as CtaProps
})

export default usPayrollEmploymentTaxData
