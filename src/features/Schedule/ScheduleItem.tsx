import { formatDateNoYear } from '@/shared/utils/dateFormat/dateFormat';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  url: string;
  title: string;
  startDate?: string;
  endDate?: string;
  location?: string;
}

export const ScheduleItem = ({
  url,
  title,
  startDate,
  endDate,
  location,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Box position="relative" w={{ base: '100%', lg: '100%' }} h="80px">
        <Link to={url}>
          <Box
            position="absolute"
            w="100%"
            h="100%"
            bg="#808080"
            left="-6px"
            bottom="-6px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            cursor="pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            zIndex="1"
          >
            <Box
              w="58px"
              h="58px"
              objectFit="cover"
              position="absolute"
              transform="translateY(-50%)"
              top="55%"
              left="-18px"
            >
              <Image
                w="100%"
                display="block"
                src="/images/ico-hexagon-black.svg"
              />
            </Box>
            <Flex pl="50px" alignItems="center">
              <Box w="50px" textAlign="center" mr="18px">
                <Text fontSize="12px">
                  {startDate ? formatDateNoYear(startDate) : ''}
                </Text>
                <Box
                  display="inline-block"
                  transform="rotate(90deg)"
                  fontSize="12px"
                >
                  〜
                </Box>
                <Text fontSize="12px">
                  {endDate ? formatDateNoYear(endDate) : ''}
                </Text>
              </Box>
              <Box>
                <Text isTruncated fontSize={{ base: '12px', lg: '16px' }}>
                  {title}
                </Text>
                <Flex alignItems="center">
                  <Box mr="6px">
                    <Image src="/images/ico-point-green.svg" />
                  </Box>
                  <Text fontSize={{ base: '10px', lg: '12px' }}>
                    {location || ''}
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Box
              w="50px"
              ml="8px"
              transform={isHovered ? 'translateX(6px)' : 'translateX(0px)'}
              transition="transform 0.3s ease-in-out"
            >
              <Image
                w="11px"
                h="25px"
                src="/images/ico-arrow-white-brock.svg"
              />
            </Box>
          </Box>
          <Box
            w="100%"
            h="100%"
            bg="#707070"
            transform={
              isHovered
                ? 'translateX(6px) translateY(-6px)'
                : 'translateX(0px) translateY(0px)'
            }
            transition="transform 0.3s ease-in-out"
          />
        </Link>
      </Box>
    </>
  );
};
