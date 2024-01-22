import { Box, Text, HStack } from '@chakra-ui/react';
import { css } from '@emotion/react';

export const ProfileContent = () => {
  const beforeImage = css`
    position: relative;
    width: 100%;
    height: 85%;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 30px;
    background-color: #666666;
    overflow: hidden;
    font-size: 18px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: -10px;
      bottom: 0;
      width: 60%;
      height: 5px;
      background-image: url('/images/img-text-bg.webp');
      background-size: cover;
      background-repeat: no-repeat;
      transform: rotate(90deg);
      transform-origin: left bottom; /* 回転の基点を設定 */
    }
  `;

  const afterDot = css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    &::after {
      content: ':';
      width: 5px;
    }
  `;
  return (
    <Box w="100%" display="flex" justifyContent="space-between" mb="96px">
      <Box w="calc(50% - 22px)">
        <Text fontSize="24px" mb="16px">
          Profile
        </Text>
        <Box css={beforeImage} boxShadow="10px -10px #333333">
          <HStack mb="16px">
            <Text minW="106px" css={afterDot}>
              国 籍
            </Text>
            <Text fontSize="18px">テキスト</Text>
          </HStack>
          <HStack mb="16px">
            <Text minW="106px" css={afterDot}>
              出身地
            </Text>
            <Text fontSize="18px">テキスト</Text>
          </HStack>
          <HStack mb="16px">
            <Text minW="106px" css={afterDot}>
              生年月日
            </Text>
            <Text fontSize="18px">テキスト</Text>
          </HStack>
          <HStack mb="16px">
            <Text minW="106px" css={afterDot}>
              身 長
            </Text>
            <Text fontSize="18px">テキスト</Text>
          </HStack>
          <HStack mb="16px">
            <Text minW="106px" css={afterDot}>
              体 重
            </Text>
            <Text fontSize="18px">テキスト</Text>
          </HStack>
          <HStack>
            <Text minW="106px" css={afterDot}>
              趣 味
            </Text>
            <Text fontSize="18px">テキスト</Text>
          </HStack>
        </Box>
      </Box>
      <Box w="calc(50% - 22px)">
        <Text fontSize="24px" mb="16px">
          Result
        </Text>
        <Box css={beforeImage} boxShadow="10px -10px #333333">
          <Box mb="16px">
            <Text fontSize="16px">2023.12.12</Text>
            <Text fontSize="18px">フィリピン 選手権 XCE 3位</Text>
          </Box>
          <Box mb="16px">
            <Text fontSize="16px">2023.12.12</Text>
            <Text fontSize="18px">フィリピン 選手権 XCE 3位</Text>
          </Box>
          <Box mb="16px">
            <Text fontSize="16px">2023.12.12</Text>
            <Text fontSize="18px">フィリピン 選手権 XCE 3位</Text>
          </Box>
          <Box>
            <Text fontSize="16px">2023.12.12</Text>
            <Text fontSize="18px">フィリピン 選手権 XCE 3位</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};