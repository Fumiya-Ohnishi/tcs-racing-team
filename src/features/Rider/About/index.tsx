import { convertNewlineToBreak } from '@/shared/utils/convertNewlineToBreak/convertNewlineToBreak';
import { Box, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getMemberById, MemberId } from '@/constants';

interface Props {
  id: MemberId;
}

export const About: FC<Props> = ({ id }) => {
  const { t } = useTranslation('teamMember');

  // `id` に対応するメンバーを取得
  const member = getMemberById(id);

  return (
    <Box
      w={{ base: '100%', lg: '88%' }}
      ml="auto"
      mb={{ base: '139px', lg: '288px' }}
      position="relative"
    >
      <Box display={{ base: 'flex', lg: 'none' }} justifyContent="center">
        <Text
          position="relative"
          display="inline-block"
          mb="65px"
          pb="8px"
          fontSize="24px"
          fontWeight="bold"
          color="#fff"
        >
          {t(`aboutTitle.${id}`)}
        </Text>
      </Box>

      <Box
        w={{ base: '100%', lg: '50%' }}
        minW={{ base: '350px', lg: '850px' }}
        ml="auto"
        mb={{ base: '16px', lg: '0' }}
        objectFit="cover"
      >
        <Image
          w="100%"
          minH={{ customSm: '270px', custom: '350px', lg: '550px' }}
          maxH={{ customSm: 'none', custom: '450px', lg: 'auto' }}
          src={member.memberPageAboutSectionImagesPath}
          alt={member.nameJa}
        />
      </Box>

      <Box
        position="absolute"
        top="0"
        right="0"
        w="50%"
        minW={{ base: 'auto', lg: '850px' }}
        h="100%"
        bgGradient="linear(to-r, #1A1A1A, transparent)"
        display={{ base: 'none', lg: 'block' }}
      />
      <Box
        color="#fff"
        w={{ base: '88%', lg: '60%' }}
        position={{ base: 'unset', lg: 'absolute' }}
        top="10px"
        left="0"
        mx={{ base: 'auto', lg: '0' }}
      >
        <Text
          fontSize="35px"
          fontWeight="bold"
          mb="65px"
          display={{ base: 'none', lg: 'block' }}
        >
          {t(`aboutTitle.${id}`)}
        </Text>
        <Text lineHeight="2" fontSize="14px">
          {convertNewlineToBreak(t(`about.${id}`))}
        </Text>
      </Box>
    </Box>
  );
};
