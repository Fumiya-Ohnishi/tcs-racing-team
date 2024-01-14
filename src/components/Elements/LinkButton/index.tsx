import { HStack, Image, Spacer, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { css, keyframes } from '@emotion/react';

// 下線が展開されるアニメーションを定義
const expandUnderline = keyframes`
  from {
    width: 0;
    background-position: 0% 50%;
  }
  to {
    width: 100%;
    background-position: 100% 50%;
  }
`;

type Props = {
  text: string;
  link: string;
};

export const LinkButton: FC<Props> = ({ link, text }) => {
  return (
    <HStack>
      <Spacer />
      <Link to={link}>
        <HStack
          position="relative"
          css={css`
            &::after {
              content: '';
              position: absolute;
              bottom: -3px;
              left: 0;
              height: 3px;
              background-image: linear-gradient(
                to right,
                violet,
                indigo,
                blue,
                green,
                yellow,
                orange,
                red
              );
              transition: width 0.5s ease-in-out;
            }
            &:hover::after {
              width: 100%;
              animation: ${expandUnderline} 0.5s ease-in-out forwards;
            }
          `}
        >
          <Text color="#fff" fontWeight="bold">
            {text}
          </Text>
          <Image src="/images/ico-arrow-white-brock.svg" />
        </HStack>
      </Link>
    </HStack>
  );
};
