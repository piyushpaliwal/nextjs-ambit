import { NextPage } from 'next'
import { FC, Fragment, useRef } from 'react'
import Head from 'next/head'
import FigureImage from 'components/reuseable/FigureImage'
import { softwareList } from 'data/client'
import { faqList } from 'data/home-page-faq'
import Accordion from 'components/reuseable/accordion'
import { slideInDownAnimate, zoomInAnimate } from 'utils/animation'
import Image from 'next/image'
import Carousel1 from '../../public/img/photos/carousel1.jpg'
import Carousel2 from '../../public/img/photos/carousel2.jpg'
import Carousel3 from '../../public/img/photos/carousel3.jpg'
import Wave from '../../public/img/svg/wave.svg'
import Carousel from 'components/reuseable/Carousel'
import NextLink from 'components/reuseable/links/NextLink'
import { processOutsourcingList } from 'data/process-outsourcing2'
import { processStaffingList } from 'data/process-staffing2'
import { serviceList, staffList } from 'data/service2'
import ListColumn from "components/reuseable/ListColumn"
import carouselBreakpoints from 'utils/carouselBreakpoints'
import { TestimonialCard } from 'components/reuseable/testimonial-cards'
import { testimonialList2 } from 'data/testimonial-list2'
import { Navbar } from 'components/blocks/navbar'


const RemoteAccountingTaxSolutions: NextPage = () => {

  const ProcessSection: FC<{
    title: string
    subtitle: string
    processList: { id: number; title: string; Icon: FC<{ className?: string }> }[]
  }> = ({ title, subtitle, processList }) => (
    <div className="mb-10">
      <h3 className="display-3 text-center text-primary mb-3">{title}</h3>
      <p className="fs-15 text-navy text-center mb-5">{subtitle}</p>
      <div className="row gx-md-5 gx-lg-8 gx-xl-4 gy-5 gap-1 text-center justify-content-center process-wrapper text-center flex-wrap">
        {processList.map(({ id, title, Icon }) => (
          <div className="w-19 h-19 card" key={id}>
            <div className="card-body px-0 px-xl-2 pt-6 d-flex flex-column justify-content-start align-items-center">
              <Icon className="icon-svg-xs solid-duo text-purple-pink mb-4" />
              <h4 className="fs-16">{title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const list = [
    ["Thorough Vetting Process", "Flexible Hiring", "No Long-Term Contracts", "Robust Security Measures"],
    ["24/7 Support", "Data Accuracy", "Advanced Software", "Reporting"]
  ];

  const carouselBreakpoint = {
    0: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1200: { slidesPerView: 5 }
  }
  

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Online Bookkeeping and Accounting Services | Ambit Tax & Accounting</title>
        <meta
          name="description"
          content="Let Ambit handle all of your online bookkeeping and accounting needs including weekly bookkeeping, month-end financials, tax prep, and more."
        />
      </Head>
      <header className="wrapper bg-soft-primary">
        <Navbar
          stickyBox={false}
          logoAlt="logo"
          navOtherClass="navbar-other ms-xl-4"
          navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
          social
          button={
            <a
              href="https://calendly.com/ambit-accounting/15min"
              title="Schedule a Meeting"
              className="btn btn-sm btn-primary rounded-pill fs-sm px-2 py-1"
            >
              Schedule a Meeting
            </a>
          }
        />
      </header>
      <main className="content-wrapper">
        <section
          className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 bg-content text-white"
          style={{ backgroundColor: '#131a40' }}
        >
          <div className="container pt-18 pb-16">
            <div className="row gx-0 gy-12 align-items-center">
              <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 content text-center text-lg-start">
                <div className="d-flex justify-content-center justify-content-lg-start mt-8">
                  <span style={slideInDownAnimate('1200ms')}>
                    <NextLink
                      title="Discover More"
                      href="/services/accounting-bookkeeping"
                      className="btn btn-white rounded-4 me-2"
                    />
                  </span>
                  <span style={slideInDownAnimate('1500ms')}>
                    <a
                      href="https://calendly.com/ambit-accounting/15min"
                      className="btn btn-outline-white rounded-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Schedule a Call
                    </a>
                  </span>
                </div>
                <h1 className="display-2 mt-5 mb-5 text-white w-xl-90" style={slideInDownAnimate('600ms')}>
                  Build Your Ideal Accounting Team with Our Outsource and Offshore Staffing Solutions
                </h1>
                <p className="lead fs- lh-sm mb-7 pe-xl-10" style={slideInDownAnimate('900ms')}>
                  Enhance your firm’s capacity and efficiency with skilled professionals trained in U.S. accounting standards. 
                </p>
                <p className="lead fs-16 lh-sm mb-7 pe-xl-10" style={slideInDownAnimate('900ms')}>
                </p>                
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="swiper-container shadow-lg">
                  <Carousel slidesPerView={1} className="dots-over">
                    <Image alt="Carousel 1" className="rounded" src={Carousel1} />
                    <Image alt="Carousel 2" className="rounded" src={Carousel2} />
                    <Image alt="Carousel 3" className="rounded" src={Carousel3} />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper bg-light">
          <div className="container py-14">
            <Fragment>
              <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center">
                <div className="col-lg-5">
                  <h1 className="display-2 mt-5 mb-5" style={slideInDownAnimate('600ms')}>
                    Focus on Growth While We Manage Your Accounting Staffing Solutions
                  </h1>
                  <h2 className="fs-16 mb-3 w-xxl-75">Choose from over 
                    <span className="text-primary"> 430+ </span>
                    experienced staff members, available on-demand through flexible outsourcing or dedicated offshore staffing solutions.
                  </h2>
                  <div className='mt-10'>
                    <a
                      href="https://calendly.com/ambit-accounting/15min"
                      title="Schedule a Meeting"
                      className="btn btn-sm btn-primary rounded-pill fs-lg px-3 py-1 w-auto"
                      >
                        Inquire Now
                    </a>
                  </div>
                </div>
                <div className="col-md-8 col-lg-6 offset-lg-1 position-relative">
                  <div
                    className="shape rounded-circle bg-line primary rellax w-18 h-18"
                    style={{ top: "-2rem", right: "-1.9rem" }}
                  />

                  <div
                    className="shape rounded bg-soft-primary rellax d-md-block"
                    style={{ width: "85%", height: "90%", left: "-1.5rem", bottom: "-1.8rem" }}
                  />

                  <figure className="rounded">
                    <img src="/img/photos/hero2.jpg" alt="about" />
                  </figure>
                </div>
              </div>
            </Fragment>
          </div>
        </section>
        <section className="wrapper bg-gray">
          <div className="container py-12">
            <Fragment>
              <div className="row text-center">
                <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                  <h3 className="display-4">Hire From Our Comprehensive 
                  <span className="text-primary"> Outsourcing </span>
                  and Dedicated Offshore 
                  <span className="text-primary"> Staffing </span>
                  Solutions</h3>
                </div>
              </div>

              <div className="row gx-lg-0 gy-10 align-items-center mt-10 mb-10">
                <div className="col-10 col-xl-4">
                <h3 className="display-4 mb-6">
                    Outsource 
                    <span className="underline-3 style-3 primary"> Accounting </span>
                    and Tax Services
                  </h3>
                  <div className='mt-4 mb-8'>
                      <a
                        href="https://calendly.com/ambit-accounting/15min"
                        title="Schedule a Meeting"
                        className="btn btn-sm btn-primary rounded-4 fs-lg px-3 py-1 w-auto"
                        >
                        Hire Now
                      </a>
                    </div>
                </div>
                <div className="col-lg-11 col-xl-7 offset-lg-1">
                  <div className="row d-flex gap-5 gx-md-5 gx-lg-8 gx-xl-4 gy-5 text-center justify-content-center text-center flex-wrap">
                  {serviceList.map((item) => (
                      <div key={item.id} className={`h-20 w-20 border rounded border-2 ${item.className}`}>
                        <div className={`h-100 w-100 d-flex flex-column text-center justify-content-center align-items-center py-auto px-1 gap-2`}>
                          <Image src={item.icon} width={50} height={50} alt='icon' />
                          <h4 className='fs-17'>{item.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='d-none d-md-block'>
                <FigureImage width={100} height={10} src={Wave} alt="wave" className='w-100 h-12' />
              </div> 
              <div className="row gx-lg-0 gy-10 align-items-center mt-10 mb-6">
                <div className="col-10 col-xl-4 col-xxl-3">
                <h3 className="display-4 mb-6">
                    Dedicated Offshore 
                    <span className="underline-3 style-3 primary"> Staffing </span>
                    Soutions
                  </h3>
                  <div className='mt-4 mb-8'>
                      <a
                        href="https://calendly.com/ambit-accounting/15min"
                        title="Schedule a Meeting"
                        className="btn btn-sm btn-primary rounded-4 fs-lg px-3 py-1 w-auto"
                        >
                        Hire Now
                      </a>
                    </div>
                </div>
                <div className="col-lg-11 col-xl-7 col-xxl-8 offset-lg-1">
                  <div className="row d-flex gap-5 row gx-md-5 gx-lg-8 gx-xl-4 gy-5 text-center justify-content-center text-center flex-wrap">
                  {staffList.map((item) => (
                      <div key={item.id} className={`h-18 w-18 border rounded border-2 ${item.className}`}>
                        <div className={`h-100 w-100 d-flex flex-column text-center justify-content-center align-items-center py-auto px-2 gap-2`}>
                          <Image src={item.icon} width={50} height={50} alt='icon' />
                          <h4 className='fs-17'>{item.title}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Fragment>
          </div>
        </section>
        <section className="wrapper bg-light">
          <div className="container pt-14 pb-10">
            <div className="row text-center">
              <div className="col-lg-12 mx-auto">
                <h2 className="fs-18 text-uppercase text-primary mb-3">Our Working Process</h2>
                <h3 className="display-3 text-center px-xl-10 px-xxl-15 mb-4">
                  Simple and Smooth Delivery Process
                </h3>
                <ProcessSection
                  title="Outsourcing Services"
                  subtitle="Streamline Your Operations: Outsource with Ease"
                  processList={processOutsourcingList}
                />
                <ProcessSection
                  title="Dedicated Offshore Staffing"
                  subtitle="Find Your Perfect Match: Offshore Staffing"
                  processList={processStaffingList}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper bg-gray">
          <div className="container pt-11 pt-xl-14 pb-1">
            <Fragment>
              <div className="row gx-lg-0 gx-xl-8 gy-10 gy-md-13 gy-lg-0 mb-7 mb-md-10 mb-lg-13 align-items-center">
                <div className="col-lg-5 mt-xl-n10 text-start">
                  <h3 className="display-4 mb-5">Why Ambit?</h3>
                  <ListColumn list={list} classname="col-12 col-md-6 fs-18" />
                  <div className='mt-8 mb-12'>
                    <a
                      href="https://calendly.com/ambit-accounting/15min"
                      title="Schedule a Meeting"
                      className="btn btn-sm btn-primary rounded-pill fs-lg px-3 py-1 w-auto"
                      >
                      Get Started
                    </a>
                  </div>
                </div>
                <div
                  className="offset-md-1 position-relative col-lg-5 my-0 py-0"
                  style={zoomInAnimate("0ms")}>
                  <div className="shape bg-dot primary rellax w-17 h-19" style={{ top: "-1.7rem", left: "-1.5rem" }} />
                  <div
                    className="shape rounded bg-soft-primary rellax d-md-block"
                    style={{ width: "85%", height: "90%", right: "-0.8rem", bottom: "-1.8rem" }}
                  />

                  <FigureImage
                    className="w-auto rounded"
                    src='/img/photos/carousel-3@2x.jpg'
                    alt="Why Ambit"
                    width={500}
                    height={500}
                  />
                </div>    
              </div>
            </Fragment>
          </div>
        </section>
        <section className="wrapper bg-light">
          <div className="container py-12">
            <div className="col gx-lg-8 gx-xl-12 gy-10 gy-lg-0 text-center">
              <div className="mt-lg-2">
                <h2 className="display-4 text-uppercase text-primary mb-3">Our Software Expertise</h2>
              </div>
              <div className="row justify-content-center">
                <div className="row gy-8">
                  <Carousel grabCursor spaceBetween={0} navigation={false} breakpoints={carouselBreakpoint} autoplay={{delay: Number(process.env.NEXT_PUBLIC_SOFTWARES_CAROUSEL_SWIPE_DURATION), disableOnInteraction: false}}>
                    {softwareList.map((item) => (
                      <div className="mx-4" key={item}>
                        <FigureImage width={270} height={193} src={item} alt="Software" />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="wrapper image-wrapper bg-image bg-overlay"
          style={{ backgroundImage: 'url(/img/photos/bg-testimonial.jpg)' }}
        >
          <div className="container py-14">
            <Fragment>
              <h2 className="display-4 mb-5 text-white text-center">What Our Clients Say</h2>
              <div className="swiper-container dots-closer dots-light dots-light-75">
                <Carousel grabCursor spaceBetween={0} navigation={false} breakpoints={carouselBreakpoints}>
                  {testimonialList2.map((item, i) => (
                      <TestimonialCard {...item} key={i} />
                  ))}
                </Carousel>
              </div>
            </Fragment>
          </div>
        </section>        
        <section className="wrapper bg-gray">
          <div className="container py-12">
            <Fragment>
              <div className="row text-center">
                <div className="col-lg-12 mx-auto my-5">
                  <h2 className="display-3 mb-3">Frequently Asked Questions</h2>
                  <p className="fs-16 text-navy text-center mb-5 fw-bold text-primary">Get Answers to Common Queries</p>
                </div>
                <Fragment>
                  <div className="accordion-wrapper" id="accordion">
                    <div className="row">
                      {faqList.map((items, i) => {
                        return (
                          <div className="col-md-12 text-start" key={i}>
                            {items.map((item) => (
                              <Accordion key={item.no} {...item} />
                            ))}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </Fragment>
                <div className="row gx-lg-0 gx-xl-8 gy-10 gy-md-13 gy-lg-0 mt-16 mb-2 align-items-center">
                  <div className="col-lg-5 mt-lg-n10 text-start">
                    <h2 className="fs-18 text-primary mb-3">Ambit Tax and Accounting</h2>
                    <h2 className="display-3 mb-3 w-75">Your One Stop Accounting <br/> and Tax Solution!</h2>
                    <div className='mt-4 mb-8'>
                      <a
                        href="https://calendly.com/ambit-accounting/15min"
                        title="Schedule a Meeting"
                        className="btn btn-sm btn-primary rounded-pill fs-lg px-3 py-1 w-auto"
                        >
                        <span className='pe-2'>Request a Quote</span>
                        <span><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6651 5.8952L6.7151 1.9452C6.53294 1.7566 6.43215 1.504 6.43443 1.2418C6.4367 0.979602 6.54187 0.728789 6.72728 0.543381C6.91269 0.357973 7.1635 0.252805 7.4257 0.250526C7.6879 0.248248 7.9405 0.349042 8.1291 0.5312L13.7861 6.1882C13.8793 6.28085 13.9532 6.39102 14.0037 6.51235C14.0542 6.63368 14.0801 6.76379 14.0801 6.8952C14.0801 7.02661 14.0542 7.15672 14.0037 7.27806C13.9532 7.39939 13.8793 7.50955 13.7861 7.6022L8.1291 13.2592C8.03685 13.3547 7.92651 13.4309 7.8045 13.4833C7.6825 13.5357 7.55128 13.5633 7.4185 13.5645C7.28572 13.5656 7.15404 13.5403 7.03115 13.49C6.90825 13.4398 6.7966 13.3655 6.70271 13.2716C6.60881 13.1777 6.53456 13.0661 6.48428 12.9432C6.434 12.8203 6.4087 12.6886 6.40985 12.5558C6.411 12.423 6.43859 12.2918 6.491 12.1698C6.54341 12.0478 6.61959 11.9375 6.7151 11.8452L10.6651 7.8952H1.0791C0.813886 7.8952 0.559532 7.78984 0.371995 7.60231C0.184459 7.41477 0.0791016 7.16042 0.0791016 6.8952C0.0791016 6.62999 0.184459 6.37563 0.371995 6.18809C0.559532 6.00056 0.813886 5.8952 1.0791 5.8952H10.6651Z" fill="white"/></svg></span>
                      </a>
                    </div>
                  </div>
                  <div
                    className="col-md-8 offset-md-2 col-lg-6 offset-lg-1 position-relative"
                    style={zoomInAnimate("0ms")}>
                    <FigureImage
                      className="w-auto"
                      src='/img/consult-ambit.png'
                      alt="consult ambit"
                      width={600}
                      height={310}
                    />
                  </div>

                </div>
              </div>
            </Fragment>
          </div>
        </section>
      </main>
    </Fragment>
  )
}

export default RemoteAccountingTaxSolutions
