import { Box, Image } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { FC } from 'react';

type Props = {
  src: string;
};

export const ImageFilter: FC<Props> = ({ src }) => {
  const gradientFilter = css`
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(26, 26, 26, 0), #000);
    }
  `;

  return (
    <Box w="100%" objectFit="contain" css={gradientFilter}>
      <Image display="block" w="100%" src={src} alt="" />
    </Box>
  );
};
