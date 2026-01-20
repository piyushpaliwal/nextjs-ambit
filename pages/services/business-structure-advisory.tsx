import Header, { type HeaderProps } from 'components/blocks/header/Header'
import { HeroInnerPages, type HeroInnerPagesProps } from 'components/blocks/hero'
import HeroImage from '../../public/img/photos/accounting-and-bookkeeping-banner.svg'
import type { NextPage } from 'next'
import { Footer } from 'components/blocks/footer'
import { FAQ2 } from 'components/blocks/faq'
import { businessStructureAdvisoryFaqSet } from 'data/faq'
import Cta, { type CtaProps } from 'components/common/cta'
import type { FC } from 'react'
import type IconProps from 'types/icon'
import BriefcaseTwo from 'icons/lineal/BriefcaseTwo'
import User from 'icons/lineal/User'
import Shop from 'icons/lineal/Shop'
import NetworkingTwo from 'icons/lineal/NetworkingTwo'

type AdvisoryStructure = {
  id: number
  title?: string
  description?: string
  advisorySet?: string[]
  Icon?: FC<IconProps>
}

const advisoryStructureSet: AdvisoryStructure[] = [
  {
    id: 1,
    title: 'Sole Proprietorship',
    description:
      'Sole proprietorships are suitable for early-stage or low-risk activities. Income is reported on the individual tax return and subject to self-employment tax.',
    advisorySet: [
      'Suitability based on income and risk profile',
      'Federal and state tax exposure',
      'Transition planning to LLC or corporate structures'
    ],
    Icon: User
  },
  {
    id: 2,
    title: 'Limited Liability Company (LLC)',
    description: 'LLCs provide liability protection and flexibility in taxation and management.',
    advisorySet: [
      'Single-member and multi-member structures',
      'Federal and state tax elections',
      'Operating agreements and governance',
      'Suitability versus S Corporation or C Corporation'
    ],
    Icon: BriefcaseTwo
  },
  {
    id: 3,
    title: 'S Corporation',
    description:
      'S Corporations offer pass-through taxation with payroll optimization, subject to IRS eligibility rules.',
    advisorySet: [
      'Reasonable compensation and dividend planning',
      'Shareholder eligibility and compliance',
      'Multi-state tax planning',
      'Ongoing IRS compliance management'
    ],
    Icon: Shop
  },
  {
    id: 4,
    title: 'C Corporation',
    description: 'C Corporations are suitable for scalable, investor-backed, or high-growth companies.',
    advisorySet: [
      'Corporate tax planning and optimization',
      'Equity and share class structuring',
      'Investor readiness and compliance',
      'Holding company and group structuring'
    ],
    Icon: NetworkingTwo
  }
]

const headerProps: HeaderProps = {
  title: 'US Business Structure & Company Formation Advisory | Ambit',
  description:
    'Ambit provides US business structure and company formation advisory for startups, owner-managed businesses, and international companies, ensuring IRS compliance and scalable growth.',
  language: true
}

const heroProps: HeroInnerPagesProps = {
  title: 'Build a Foundation That Scales',
  description: `Don't just register—strategize. Ambit guides founders and international groups through complex US entity selection, ensuring your business is tax-efficient, investor-ready, and built for growth.`,
  buttonHref: '/contact',
  buttonTitle: 'Talk to us',
  imgAlt: 'Experts in your corner',
  imgSrc: HeroImage
}
const ctaProps: CtaProps = {
  title: ' Ready to Assess Your Business Structure?',
  description:
    'Whether forming a new US entity or reviewing an existing structure, Ambit provides structured, compliant, and forward-looking advisory support',
  buttonTitle: 'Request a Assessment'
}

const BusinessStructureAdvisory: NextPage = () => {
  return (
    <>
      <Header {...headerProps} />

      <main className="content-wrapper">
        <HeroInnerPages {...heroProps} />
        {/*------ Structure we advice on ------*/}
        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-14">
            <div className="row text-center">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <h2 className="display-4">Structures We Advise On</h2>
              </div>
            </div>
            <div className="row gx-lg-8 gx-xl-12 gy-8 mt-9">
              {advisoryStructureSet.map(({ id, Icon, title, description, advisorySet }) => (
                <div className="col-md-6" key={id}>
                  <div className="d-flex flex-row">
                    {Icon && (
                      <div>
                        <Icon className="icon-svg-sm text-primary me-4" />
                      </div>
                    )}
                    <div>
                      {title && <h4 className="mb-1">{title}</h4>}
                      {description && <p className="mb-1">{description}</p>}
                      {advisorySet && (
                        <ul className="mb-0">
                          {advisorySet.map((advisory) => (
                            <li key={advisory}>{advisory}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*------ CTA ------*/}
        <Cta {...ctaProps} />

        {/*------ FAQ ------*/}
        <FAQ2 faqSet={businessStructureAdvisoryFaqSet} />
      </main>
      {/*------ Footer ------*/}
      <Footer />
    </>
  )
}

export default BusinessStructureAdvisory
