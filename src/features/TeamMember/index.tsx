import { Title } from "@/components/Elements/Title";
import { PageLayout } from "@/components/Layouts/PageLayout";
import { Message } from "../Top/Message/Message";
import { OfficialMedia } from "../Top/OfficialMedia";
import { OurPartners } from "../Top/OurPartners";

export const TeamMemberContent = () => {
  return (
    <>
      <PageLayout>
        <Message />
        <OurPartners />
        <OfficialMedia />
      </PageLayout>
    </>
  );
}
