import PageLayout from 'components/layouts/PageLayout'
import { NextPage } from 'next'
import { FC } from 'react'

const PrivacyPolicyPage: NextPage = () => {
  return (
    <PageLayout title="Personal Information & Data Security" backgroundUrl="/img/photos/bg-privacy-policy.jpg">
      <section className="wrapper bg-light">
        <div className="container py-14">
          <div className="card">
            <div className="card-body p-10">
              <p>
                Ambit complies and works in accordance to the National Privacy Principles and the privacy Act 1988.
                Ambit is committed to ensure the safekeeping and collection of personal information.
              </p>

              <h2>The Information We Collect and How We Use It</h2>
              <p className="mt-5">We may collect and process the following data about you</p>

              <List
                data={[
                  'Information that you provide by filling in forms on all our websites https://ambitkpo.com/ (our site). This includes information provided at the time of registering to use our site, subscribing to our service, newsletters, posting material or requesting further services like listings via email. We may also ask you for information when you report a problem with our site.',
                  'If you contact us, we may keep a record of that correspondence.',
                  'Information gathered through any surveys is used for research purposes, although you do not have to respond to them.'
                ]}
              />

              <p className="mt-5">
                Under all circumstances email address will always remain private and will not be sold or supplied to any
                third party vendors.
              </p>
              <h2>IP addresses and cookies</h2>
              <p className="mt-5">
                We may collect information about your computer, including where available your IP address, operating
                system and browser type for system administration. This is statistical data about our Visitors' browsing
                actions and patterns, and does not identify any individual. For the same reason, we may obtain
                information about your general internet usage by using a cookie file which is stored on the hard drive
                of your computer. Cookies contain information that is transferred to your computer's hard drive. They
                help us to improve our site performance and deliver a better and more personalized service.
              </p>
              <p className="mt-5">They enable us to:</p>
              <List
                data={[
                  'To estimate our audience size and usage pattern.',
                  'To store information about your preferences, and thereby allow us to customize our site according to your individual interests.',
                  'To speed up your searches.',
                  'To recognize you when you return to our site.'
                ]}
              />
              <p className="mt-5">
                You may refuse to accept cookies by deactivating the settings on your browser which allows you to refuse
                accepting of cookies. However, if you select this setting you may be unable to access certain parts of
                our site. Unless you have adjusted your browser settings so that it will refuse cookies, our system will
                issue cookies when you log on to our site.
              </p>

              <h2>Collection of Personal Information</h2>
              <p className="mt-5">The information is collected via the Accounting or Financial planning firm.</p>
              <p className="mt-5">The information we are provided include:</p>
              <List
                data={[
                  'Names, Address, DOB and POB',
                  "ABN's, TFN's and Employment details",
                  'Personal health and insurance information',
                  'Financial information - such as income, expenses, superannuation and investment details.'
                ]}
              />

              <h2 className="mt-5">Use of Personal Information</h2>
              <p className="mt-5">
                The collection and use of personal information is only to facilitate the services we provide to your
                firm as requested by you. Only uses personal information for the purpose(s) for which it was given to us
                and for directly related purposes (unless otherwise required by or authorised by law) or as consented to
                by you or your firm.
              </p>

              <h2>Disclosure of Personal Information</h2>
              <p className="mt-5">
                Ambit will only provide the information to their staff and associated providers that relate specifically
                to the tasks requested by your firm. The information will not be provided or sold to other institutions.
                If there is a legal situation, the information may be provided in accordance to the law.
              </p>

              <h2>Access to Personal Information</h2>
              <p className="mt-5">
                Your firm and staff can access the personal information that you provide. Ambit will take the necessary
                steps to identify you are a client of Ambit before they provide the information to you.
              </p>

              <h2>Storage and Data Security</h2>
              <List
                data={[
                  'We have taken the necessary measures to ensure our data integrity is not compromised.The data is stored for 10 years for compliance, auditing purposes and removed thereafter.',
                  "Our secure delivery centre is equipped with the latest technology, infrastructure and dedicated technical staff to ensure our working environment has complete reliability and security for our clients' data.",
                  'Our group companies are ISO certified, this means our offices and systems are on par with international best practice for information security management. We do not use third party contractors to complete any work.',
                  "Biometric scanners and access cards are required to enter our offices.Only authorised personnel are allowed to enter the office and processing centre. Physical documents, books and other devices are prohibited in the processing centre. The entire office is monitored by CCTV. All PC's are desktops running a 'dumb terminal system'. Ability to save and store data on the PC is disabled.CD Rom and other drives (USB) have been removed.Access to physical/removable drives (external hard drives) have been disabled. Printers and scanners are also not available within the processing centre. Staff are required to keep personal belongings including bags, books or mobile devices in secure lockers provided outside the main processing centre.",
                  'Internet activity is heavily controlled with websites required to be added to a “whitelist” before they can be accessed.Staff are unable to access personal emails from the office and work emails are unable to send data outside the office. Our intranet, internal portals, software and sites have IP Authentication in place so that no one can access these records outside our office premises. Access to our internal software is password protected with strength measurement. Passwords are also required to be updated on a regular basis. All terminals include screen snapshots and are regularly audited to ensure staff are following security guidelines.',
                  "All our terminals and servers are installed with firewalls, antivirus software, intrusion detection software and prevention systems to minimise any exploits or attacks.Our security software is kept updated at all times and when required. All PC's within our organisation have an auto-lock feature to ensure PC's are not kept unlocked.Wireless connections are prohibited within our back-office in India and US."
                ]}
              />

              <h2 className="mt-5">Disclosure of Personal Information</h2>
              <p className="mt-5">
                Ambit will only provide the information to their staff and associated providers that relate specifically
                to the tasks requested by your firm.
              </p>
              <p className="mt-3">
                The information will not be provided or sold to other institutions. If there is a legal situation, the
                information may be provided in accordance to the law.
              </p>

              <h2>Access to Personal Information</h2>

              <p className="mt-5">
                Your firm and staff can access the personal information that you provide. Ambit will take the necessary
                steps to identify you are a client of Ambit before they provide the information to you.
              </p>

              <h2>Reporting of data breach</h2>

              <p className="mt-5">
                If there is a data breach that is likely to result in serious harm, we will take the following action:
              </p>
              <List
                data={[
                  'Contain the information leak and asses the actual damage caused by the breach.',
                  'Prepare a statement detailing the breach.',
                  'Immediately after providing the statement, notify each individual to whom the information relates to, or who are at risk.'
                ]}
              />
              <p className="mt-5">If this is not possible, then we will:</p>
              <List
                data={[
                  'Publish a copy of the statement on the website',
                  'Take reasonable steps to publicise the contents of the statement.',
                  'Review and change our systems and processes to ensure they are further secured against future breaches.'
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

const List: FC<{ data: string[] }> = ({ data }) => {
  return (
    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
      {data.map((item) => {
        return (
          <li key={item}>
            <span>
              <i className="uil uil-check" />
            </span>
            <span>{item}</span>
          </li>
        )
      })}
    </ul>
  )
}
export default PrivacyPolicyPage
