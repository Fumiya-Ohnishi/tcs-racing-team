import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';
import { MemberContent } from './MemberContent';

type Props = {
  leftName: string;
  leftComment: React.ReactNode;
  leftImage: string;
  leftBg: string;
  leftWidth?: string;
  leftLink: string;
  rightName: string;
  rightComment: React.ReactNode;
  rightImage: string;
  rightBg: string;
  rightWidth?: string;
  rightLink: string;
};

export const Member: FC<Props> = ({
  leftName,
  leftComment,
  leftImage,
  leftBg,
  leftWidth,
  leftLink,
  rightName,
  rightComment,
  rightImage,
  rightWidth,
  rightBg,

  rightLink,
}) => {
  return (
    <Box w="90%" m="0 auto" borderBottom="solid 1px" borderColor="#fff">
      <Box w="86%" m="0 auto">
        <Box display="flex" justifyContent="space-between">
          <MemberContent
            backgroundUrl={leftBg}
            name={leftName}
            comment={leftComment}
            imageUrl={leftImage}
            width={leftWidth}
            link={leftLink}
          />
          <Box
            width="1px"
            bgColor="#fff"
            alignSelf="stretch"
            mx="4px"
            mt="76px"
            mb="16px"
          />
          <MemberContent
            backgroundUrl={rightBg}
            name={rightName}
            comment={rightComment}
            imageUrl={rightImage}
            width={rightWidth}
            link={rightLink}
          />
        </Box>
      </Box>
    </Box>
  );
};
