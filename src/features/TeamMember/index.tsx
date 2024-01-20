import { PageLayout } from "@/components/Layouts/PageLayout";
import { Message } from "../Top/Message/Message";
import { OfficialMedia } from "../Top/OfficialMedia";
import { OurPartners } from "../Top/OurPartners";
import { TeamMemberTitle } from "./components/TeamMemberTitle";

export const TeamMemberContent = () => {
  return (
    <>
      <PageLayout>
        <Message />
        <TeamMemberTitle title="&quot;存在意義・使命&quot;" middleTitle="Mission" subTitle="Mission" />
        <OurPartners />
        <OfficialMedia />
      </PageLayout>
    </>
  );
}
