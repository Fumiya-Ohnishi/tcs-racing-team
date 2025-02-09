import { Box, Text } from '@chakra-ui/react';
import { DirectorContent } from './DirectorContent';
import { Member } from './Member';
import { useTranslation } from 'react-i18next';
import { convertNewlineToBreak } from '@/shared/utils/convertNewlineToBreak/convertNewlineToBreak';

export const TheTeam = () => {
  const { t } = useTranslation('topTheTeam');
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
        id={'0'}
        post={'株式会社 A-Union TCS 代表取締兼監督'}
        name={'山本 幸平'}
        comment={convertNewlineToBreak(t('description.0'))}
        link="/member-page"
      />
      <Member
        leftName={'リアッド ハキム'}
        leftComment={leftContent}
        leftImage={'/images/img-theTeam-02.webp'}
        leftBg={'/images/img-theTeam-bg-01.webp'}
        leftLink="/member-page"
        leftId={'2'}
        rightName={'サユ ベラ'}
        rightComment={rightContent}
        rightImage={'/images/img-theTeam-03.webp'}
        rightBg={'/images/img-theTeam-bg-02.webp'}
        rightLink="/member-page"
        rightId={'3'}
      />
      <Member
        leftName={'松本 佑太'}
        leftComment={leftContentDown}
        leftImage={'/images/img-theTeam-04.webp'}
        leftBg={'/images/img-theTeam-bg-03.webp'}
        leftWidth={'55%'}
        leftLink="/member-page"
        leftId={'4'}
        rightName={'エセビア ニコル'}
        rightComment={rightContentDown}
        rightImage={'/images/img-theTeam-05.webp'}
        rightBg={'/images/img-theTeam-bg-04.webp'}
        rightLink="/member-page"
        rightId={'5'}
      />
    </Box>
  );
};
