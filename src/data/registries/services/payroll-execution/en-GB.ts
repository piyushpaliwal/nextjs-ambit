import type { HeaderProps } from 'components/blocks/header/Header'
import type { Hero4Props } from 'components/blocks/hero/Hero4'
import type { AmbitService, ServiceCallOutProps } from 'components/blocks/services/ServiceCallOut'
import type { BreadcrumbItem } from 'components/common/Breadcrumbs'
import type { CtaProps } from 'components/common/cta'
import { IconFolder } from 'types/icon'
import { definePageData, type PayrollExecutionData } from 'types/pages'
import type { RegistryFor } from 'types/transformer'

export const headerProps: RegistryFor<HeaderProps, 'payrollExecution'> = {
  titleKey: 'header.title',
  descriptionKey: 'header.description'
}

const breadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#', isActive: true },
  { label: 'Payroll Services', href: 'services/payroll-execution', isActive: true }
]

export const heroProps: RegistryFor<Hero4Props, 'payrollExecution'> = {
  titleKey: 'hero.title',
  subtitleKey: 'hero.subtitle',
  primaryHref: 'https://calendly.com/ambit-accounting/15min',
  primaryBtnText: 'Schedule Consultation',
  breadcrumbs: breadcrumbs
}

export const ctaProps: RegistryFor<CtaProps, 'payrollExecution'> = {
  titleKey: 'cta.title',
  buttonTitle: 'Request a Consultation'
}

const serviceSet: RegistryFor<AmbitService, 'payrollExecution'>[] = [
  {
    id: 1,
    titleKey: 'services.item1.title',
    iconConfig: {
      icon: 'Calendar',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 2,
    titleKey: 'services.item2.title',
    iconConfig: {
      icon: 'Money',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 3,
    titleKey: 'services.item3.title',
    iconConfig: {
      icon: 'Savings',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 4,
    titleKey: 'services.item4.title',
    iconConfig: {
      icon: 'User',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 5,
    titleKey: 'services.item5.title',
    iconConfig: {
      icon: 'CheckList',
      folder: IconFolder.LINEAL
    }
  },
  {
    id: 6,
    titleKey: 'services.item6.title',
    iconConfig: {
      icon: 'Agenda',
      folder: IconFolder.LINEAL
    }
  }
]

const serviceProps: RegistryFor<ServiceCallOutProps, 'payrollExecution'> = {
  titleKey: 'services.title',
  ambitServiceSetKey: serviceSet
}

export const gbPayrollExecutionData: PayrollExecutionData = definePageData<PayrollExecutionData>({
  headerProps: headerProps as unknown as HeaderProps,
  heroProps: heroProps as unknown as Hero4Props,
  serviceProps: serviceProps as unknown as ServiceCallOutProps,
  ctaProps: ctaProps as unknown as CtaProps
})

export default gbPayrollExecutionData
