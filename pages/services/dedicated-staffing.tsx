import PageLayout from 'components/layouts/PageLayout'
import { NextPage } from 'next'
import Head from 'next/head'
import i1 from '../../public/img/illustrations/3d4@2x.png'
import i2 from '../../public/img/illustrations/3d8@2x.png'
import i3 from '../../public/img/illustrations/3d5@2x.png'
import i4 from '../../public/img/illustrations/3d6@2x.png'
import StaffingSection from 'components/common/StaffingSection'
import { staffingDetails } from 'data/staffing'

const imageSources = [i1, i2, i3, i4];
const imageHeights = [408, 428, 577, 511];
const DedicatedStaffing: NextPage = () => {
  return (
    <PageLayout title="Dedicated Staffing" backgroundUrl="/img/photos/bg11.jpg">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dedicated Staffing</title>
      </Head>
      {staffingDetails.map((detail, index) => (
        <StaffingSection
          key={index}
          staffingDetail={detail}
          imageSrc={imageSources[index]}
          imageHeight={imageHeights[index]}
        />
      ))}
    </PageLayout>
  )
}

export default DedicatedStaffing
