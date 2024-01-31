import { SnsIcon } from '@/components/Elements/SnsIcon';
import { convertNewlineToBreak } from '@/shared/utils/convertNewlineToBreak/convertNewlineToBreak';
import { HStack, Box, Image, Text, useMediaQuery } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  id: number;
}

export const FirstView: FC<Props> = ({ id }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const { t } = useTranslation('teamMember');

  // PC用とスマートフォン用の画像パス
  const imagePath = isMobile
    ? '/images/rider/img-top-sp.webp'
    : '/images/rider/img-top-pc.webp';

  const humanImage = [
    '/images/img-theTeam-01.webp',
    '/images/rider/img-top-rider-01.webp',
    '/images/img-theTeam-02.webp',
    '/images/img-theTeam-03.webp',
    '/images/img-theTeam-04.webp',
    '/images/img-theTeam-05.webp',
  ];
  return (
    <Box
      position="relative"
      w="100vw"
      h={{ base: 'calc(100vh - 110px)', lg: 'calc(100vh - 52px)' }}
      color="#fff "
      mb="16px"
      mt={{ base: '110px', lg: '50px' }}
      overflowX={{ base: 'hidden', lg: 'visible' }}
    >
      <Box w="100vw" h={{ base: 'auto', lg: '90vh' }}>
        <Image src={imagePath} alt="Rider" />
      </Box>
      <Box
        position="absolute"
        bottom={{ base: 'auto', lg: '0' }}
        left={{ base: 'auto', lg: '60%' }}
        top={{ base: '40%', lg: 'auto' }}
        right={{ base: '-30px', lg: 'auto' }}
        transform={{ base: 'translateY(-60%)', lg: 'translateX(-40%)' }}
        width={{ base: '80%', lg: 'auto' }}
        h={{ base: 'auto', lg: '100%' }}
        objectFit="contain"
      >
        <Image
          w="100%"
          h="100%"
          objectFit="cover"
          src={humanImage[id]}
          alt="Rider"
        />
      </Box>
      <Box
        position="absolute"
        right={{ base: 'auto', lg: '100px' }}
        left={{ base: '10%', lg: 'auto' }}
        top={{ base: '40%', lg: '50%' }}
        transform={{ base: 'translateY(-60%)', lg: 'translateY(-50%)' }}
        textAlign="center"
      >
        <Text fontSize={{ base: '16px', lg: '32px' }} fontWeight="bold">
          {convertNewlineToBreak(t(`title.${id}`))}
        </Text>
      </Box>
      <Box
        position="absolute"
        bottom={{ base: '165px', lg: '0' }}
        left="50%"
        w="76%"
        transform="translateX(-50%)"
      >
        <Box
          mb="45px"
          fontSize={{ base: '36px', lg: '100px' }}
          fontWeight="bold"
        >
          {convertNewlineToBreak(t(`name.${id}`))}
        </Box>
        <HStack alignItems="center" justifyContent="space-between" w="20%">
          <SnsIcon href="#" icon="images/ico-facebook.webp" label="Facebook" />
          <SnsIcon
            href="#"
            icon="images/ico-Instagram.webp"
            label="Instagram"
          />
          <SnsIcon href="#" icon="images/ico-YouTube.webp" label="YouTube" />
          <SnsIcon href="#" icon="images/ico-TikTok.webp" label="TikTok" />
        </HStack>
      </Box>
    </Box>
  );
};
