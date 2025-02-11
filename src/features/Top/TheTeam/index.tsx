import { Box, Text } from '@chakra-ui/react';
import { DirectorContent } from './DirectorContent';
import { Member } from './Member';
import { useTranslation } from 'react-i18next';
import { convertNewlineToBreak } from '@/shared/utils/convertNewlineToBreak/convertNewlineToBreak';
import { getMemberById, noImageUrl } from '@/constants';

export const TheTeam = () => {
  const { t } = useTranslation('topTheTeam');

  // `id` を指定してメンバー情報を取得
  const director = getMemberById('0'); // 監督（山本幸平）
  const rider1 = getMemberById('2'); // リアッド ハキム
  const rider2 = getMemberById('3'); // サユ ベラ
  const rider3 = getMemberById('4'); // 松本 佑太
  const rider4 = getMemberById('5'); // エセビア ニコル

  const leftContent = (
    <Text color="#fff" fontSize={{ base: '10px', lg: '12px' }}>
      {convertNewlineToBreak(t('description.1'))}
    </Text>
  );
  const rightContent = (
    <Text color="#fff" fontSize={{ base: '10px', lg: '12px' }}>
      {convertNewlineToBreak(t('description.2'))}
    </Text>
  );
  const leftContentDown = (
    <Text color="#fff" fontSize={{ base: '10px', lg: '12px' }}>
      {convertNewlineToBreak(t('description.3'))}
    </Text>
  );
  const rightContentDown = (
    <Text color="#fff" fontSize={{ base: '10px', lg: '12px' }}>
      {convertNewlineToBreak(t('description.4'))}
    </Text>
  );

  return (
    <Box mb="98px">
      <DirectorContent
        id={director.id}
        post={'株式会社 A-Union TCS 代表取締兼監督'}
        name={director.nameJa}
        comment={convertNewlineToBreak(t('description.0'))}
        link={`/member-page`}
        imagePath={director.topTheTeamSectionImagePath || noImageUrl}
      />
      <Member
        leftName={rider1.nameJa}
        leftComment={leftContent}
        leftImage={rider1.ourTeamPageTheRiderSectionImagePath || noImageUrl}
        leftBg={rider1.topTheTeamSectionBackgroundImagePath || noImageUrl}
        leftLink={`/member-page`}
        leftId={rider1.id}
        rightName={rider2.nameJa}
        rightComment={rightContent}
        rightImage={rider2.ourTeamPageTheRiderSectionImagePath || noImageUrl}
        rightBg={rider2.topTheTeamSectionBackgroundImagePath || noImageUrl}
        rightLink={`/member-page`}
        rightId={rider2.id}
      />
      <Member
        leftName={rider3.nameJa}
        leftComment={leftContentDown}
        leftImage={rider3.ourTeamPageTheRiderSectionImagePath || noImageUrl}
        leftBg={rider3.topTheTeamSectionBackgroundImagePath || noImageUrl}
        leftLink={`/member-page`}
        leftId={rider3.id}
        rightName={rider4.nameJa}
        rightComment={rightContentDown}
        rightImage={rider4.ourTeamPageTheRiderSectionImagePath || noImageUrl}
        rightBg={rider4.topTheTeamSectionBackgroundImagePath || noImageUrl}
        rightLink={`/member-page`}
        rightId={rider4.id}
      />
    </Box>
  );
};
