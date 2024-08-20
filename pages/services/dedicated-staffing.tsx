import PageLayout from "components/layouts/PageLayout";
import { NextPage } from "next";
import Head from "next/head";
import { staffingDetails } from "data/staffing";
import ListColumn from "components/reuseable/ListColumn";
import { FC } from 'react'

type DetailSectionProps = {
  title: string;
  list?: string[];
};

const DetailSection: FC<DetailSectionProps> = ({ title, list }) => {
  if (!list || list.length === 0) return null;

  return (
    <>
      <p className="mx-2 mt-5 mb-1 fw-bolder text-primary">{title}</p>
      <ListColumn list={[list]} classname="col-xl-12" />
    </>
  );
};

const DedicatedStaffing: NextPage = () => {
  return (
    <PageLayout title="Dedicated Staffing" backgroundUrl="/img/photos/bg11.jpg">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dedicated Staffing</title>
      </Head>

      <section className="wrapper bg-light">
        <div className="container py-14 py-md-14">
          <div className="row align-items-start justify-content-between justify-content-md-center">
            {staffingDetails.map((item, index) => (
              <div key={index} className="row col-md-6 gx-lg-8 gx-xl-12 mt-4 mb-10 align-items-start">
                <div className="col-lg-4 pt-6">
                  {item.Icon && <item.Icon className="w-15 h-15 text-primary" />}
                </div>
                <div className="col-lg-8">
                  <h3 className="display-3 mb-3">{item.role}</h3>
                  <DetailSection title="Key Skillsets:" list={item.keySkillsets} />
                  <DetailSection title="Software Proficiency" list={item.softwareProficiency} />
                  <DetailSection title="Experience Level" list={item.experienceLevel} />
                  <DetailSection title="Tech-Savvy" list={item.techSavvy} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DedicatedStaffing;
