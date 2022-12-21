import { FAQ } from "components/blocks/faq";
import PageLayout from "components/layouts/PageLayout";
import { NextPage } from "next";

const faqPage: NextPage = () => {
    return (
        <PageLayout title="Frequently Asked Questions">
            <FAQ />
        </PageLayout>
    )
}

export default faqPage;