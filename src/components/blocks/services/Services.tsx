import { FC, Fragment } from 'react'
import { ServiceCard } from 'components/reuseable/service-cards'
// -------- data -------- //
import { serviceList } from 'data/service'
import Image from 'next/image'
import step1 from '../../../../public/img/icons/accounting-step-1.png'
import step2 from '../../../../public/img/icons/accounting-step-2.png'
import step3 from '../../../../public/img/icons/accounting-step-3.png'
import step4 from '../../../../public/img/icons/accounting-step-4.png'

const Services: FC = () => {
  return (
    <Fragment>
      <div className="row text-center">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 className="display-4 mb-3">How Ambit works</h2>
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 process-wrapper text-center mt-9">
        <div className="col-md-6">
          <Image className="" src={step1} alt="Accounting Step 1" width={100} height={100} />
          <h4 className="mb-1">1. Let's get rolling. Share your Accounts and meet your Bookkeeper</h4>
          <p>
            Ready to get your financial game on point? Connect your accounts securely, and we'll introduce you to a
            rockstar bookkeeper who's got your back. They'll get to know your business inside and out and show you the
            ropes on how Ambit can work wonders for your financial well-being.
          </p>
        </div>
        <div className="col-md-6">
          <Image className="" src={step2} alt="Accounting Step 1" width={100} height={100} />
          <h4 className="mb-1">2. Real time financial insights, all day, everyday</h4>
          <p>
            Say goodbye to the waiting game! Ambit's got you covered with real-time insights into your money-in and
            money-out, giving you a quick snapshot of your financial status at any given time, even before your books
            are closed.
          </p>
        </div>
      </div>
      <div className="row gx-lg-8 gx-xl-12 process-wrapper text-center mt-9">
        <div className="col-md-6">
          <Image className="" src={step3} alt="Accounting Step 1" width={100} height={100} />
          <h4 className="mb-1">3. We do your bookkeeping</h4>
          <p>
            Bookkeeping can be a pain, but not with Ambit! Our bookkeepers will keep your business transactions
            organized, your financial statements in check, and will only reach out if they need anything from you. Leave
            the rest to us!
          </p>
        </div>
        <div className="col-md-6">
          <Image className="" src={step4} alt="Accounting Step 1" width={100} height={100} />
          <h4 className="mb-1">4. Tax Time! No sweat, we got you!</h4>
          <p>
            Don't let tax time stress you out. Ambit delivers tax-ready financials straight to your doorstep, so you can
            file with ease. Or, if you prefer, let our experts handle it all for you. Either way, we've got your back!
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default Services
