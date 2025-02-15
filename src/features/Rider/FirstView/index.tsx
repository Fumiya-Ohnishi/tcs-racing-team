import { SnsIcon } from '@/components/Elements/SnsIcon';
import {
  facebookUrl,
  getMemberById,
  instagramUrl,
  tiktokUrl,
  youtubeUrl,
} from '@/constants';
import { convertNewlineToBreak } from '@/shared/utils/convertNewlineToBreak/convertNewlineToBreak';
import { useBreakpointValue, HStack, Box, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  id: string;
}

export const FirstView: FC<Props> = ({ id }) => {
  const { t } = useTranslation('teamMember');

  // `id` に対応するメンバーを取得
  const member = getMemberById(id);

  if (!member) {
    return <Text color="red">No data</Text>;
  }

  const firstViewBaseTopValue = id === '3' || id === '4' ? '36%' : '24%';

  return (
    <Box
      position="relative"
      w="100vw"
      h={{ base: 'calc(100vh - 110px)', lg: 'calc(100vh - 52px)' }}
      color="#fff"
      mb="16px"
      mt={{ base: '110px', lg: '50px' }}
      overflowX={{ base: 'hidden', lg: 'visible' }}
    >
      <Box
        w="100vw"
        h={{ base: 'auto', lg: '89vh' }}
        objectFit="cover"
        position="relative"
      >
        <Image
          src={useBreakpointValue({
            base: member.memberPageFirstViewBackgroundImageSp,
            lg: member.memberPageFirstViewBackgroundImagePc,
          })}
          alt={member.nameEn}
          w="100%"
          h="100%"
        />
      </Box>
      <Box
        position="absolute"
        bottom={{ base: 'auto', lg: '0' }}
        left={{ base: 'auto', lg: '60%' }}
        top={{ base: '28%', lg: 'auto' }}
        right={{ base: '-64px', lg: 'auto' }}
        transform={{ base: 'translateY(-60%)', lg: 'translateX(-40%)' }}
        width={{ base: '80%', lg: 'auto' }}
        h={{ base: 'auto', lg: '100%' }}
        objectFit="contain"
        zIndex="2"
      >
        <Image
          w="100%"
          h="100%"
          objectFit="cover"
          src={member.memberPageFirstViewMemberImagePath}
          alt={member.nameEn}
        />
      </Box>

      <Box
        position="absolute"
        w={{ base: '66vw', lg: '40%' }}
        right={{ base: 'auto', lg: '10px' }}
        left={{ base: '10%', lg: 'auto' }}
        top={{ base: firstViewBaseTopValue, lg: '50%' }}
        transform={{ base: 'translateY(-60%)', lg: 'translateY(-50%)' }}
        textAlign={{ base: 'left', lg: 'center' }}
        zIndex="2"
      >
        <Text fontSize={{ base: '16px', lg: '32px' }} fontWeight="bold">
          {convertNewlineToBreak(t(`title.${id}`))}
        </Text>
      </Box>

      <Box
        position="absolute"
        bottom={{ base: '96px', lg: '0' }}
        left="50%"
        w="76%"
        transform="translateX(-50%)"
        zIndex="2"
      >
        <Box
          mb="45px"
          fontSize={{ base: '36px', lg: '100px' }}
          fontWeight="bold"
        >
          {convertNewlineToBreak(t(`name.${id}`))}
        </Box>
        <HStack alignItems="center" justifyContent="space-between" w="20%">
          <SnsIcon
            href={facebookUrl}
            icon="/images/common/ico-facebook-bg-white.webp"
            label="Facebook"
          />
          <SnsIcon
            href={instagramUrl}
            icon="/images/common/ico-instagram-bg-white.webp"
            label="Instagram"
          />
          <SnsIcon
            href={youtubeUrl}
            icon="/images/common/ico-youtube-bg-white.webp"
            label="YouTube"
          />
          <SnsIcon
            href={tiktokUrl}
            icon="/images/common/ico-tiktok-bg-white.webp"
            label="TikTok"
          />
        </HStack>
      </Box>
    </Box>
  );
};
