import { SnsIcon } from '@/components/Elements/SnsIcon';
import { convertNewlineToBreak } from '@/shared/utils/convertNewlineToBreak/convertNewlineToBreak';
import { HStack, Box, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  id: number;
}

const images = [
  {
    firstViewImages: '/images/menber/img-menber-top01.webp',
    humanImage: '/images/menber/img-menber01.webp',
  },
  {
    firstViewImages: '/images/menber/img-menber-top02.webp',
    humanImage: '/images/menber/img-menber02.webp',
  },
  {
    firstViewImages: '/images/menber/img-menber-top03.webp',
    humanImage: '/images/menber/img-menber03.webp',
  },
  {
    firstViewImages: '/images/menber/img-menber-top04.webp',
    humanImage: '/images/menber/img-menber04.webp',
  },
  {
    firstViewImages: '/images/menber/img-menber-top05.webp',
    humanImage: '/images/menber/img-menber05.webp',
  },
  {
    firstViewImages: '/images/menber/img-menber-top06.webp',
    humanImage: '/images/menber/img-menber06.webp',
  },
];

export const FirstView: FC<Props> = ({ id }) => {
  const { t } = useTranslation('teamMember');
  const firstViewBaseTopValue = id === 3 || id === 4 ? '36%' : '24%';

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
      <Box
        w="100vw"
        h={{ base: 'auto', lg: '89vh' }}
        objectFit="cover"
        position="relative"
      >
        <Image src={images[id].firstViewImages} alt="Rider" w="100%" h="100%" />
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
          src={images[id].humanImage}
          alt="Rider"
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
            href="ico-facebook.webp"
            icon="images/ico-facebook.webp"
            label="Facebook"
          />
          <SnsIcon
            href="https://www.instagram.com/asia.union.tcs/"
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
