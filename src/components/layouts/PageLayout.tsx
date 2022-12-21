import { Footer } from 'components/blocks/footer';
import { Navbar } from 'components/blocks/navbar';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import { FC, Fragment, ReactNode } from 'react';

type PageLayoutProps = {
  children: ReactNode;
  title: string;
  subTitle?: string;
};

const PageLayout: FC<PageLayoutProps> = ({ title, children, subTitle }) => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-light">
        <Navbar
          stickyBox={false}
          logoAlt="logo-dark"
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
          button={<NextLink href="#" title="Free Trial" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>
      <main className="content-wrapper">
        {/* ========== page heading ========== */}
        <section className="wrapper bg-light">
          <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
            <div className="row">
              <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                <h1 className="display-1 mb-3">{title}</h1>
                {subTitle && <p className="lead px-xxl-10">{subTitle}</p>}
              </div>
            </div>
          </div>
        </section>
        {children}
      </main>
      
      {/* ========== footer section ========== */}
      <Footer />
    </Fragment>
  );
};
export default PageLayout;
