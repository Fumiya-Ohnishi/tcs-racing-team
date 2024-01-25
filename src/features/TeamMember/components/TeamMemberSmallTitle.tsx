import { Box } from "@chakra-ui/react";
import { FC } from "react";

interface SmallTitleProps {
  title: string;
}

export const TeamMemberSmallTitle: FC<SmallTitleProps> = ({
  title,
}) => {
  return (
    <Box mb="92px" textAlign="center">
      <Box color="#fff" fontSize="32px" fontWeight="bold">
        {title}
      </Box>
    </Box>
  );
}
