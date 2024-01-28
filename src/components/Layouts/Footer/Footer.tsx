import { Box, HStack, Text, VStack, useMediaQuery } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../MainLayout';
import { FooterLinkButton } from './FooterLinkButton';

export const Footer = () => {
  const [isTablet] = useMediaQuery('(max-width: 768px)');

  const fontSize = isTablet ? '10px' : '24px';
  return (
    <Box pt="117px">
      <MainLayout>
        <HStack alignItems="start" mb="37px">
          <Box
            display={{ base: 'block', lg: 'flex' }}
            w="50%"
            justifyContent="space-between"
            alignItems="start"
          >
            <Box mb={{ base: '71px', lg: '0px' }}>
              <Text
                fontWeight="bold"
                fontSize={{ base: '12px', lg: '24px' }}
                mb="23px"
              >
                USEFUL LINKS
              </Text>
              <VStack align="start">
                <FooterLinkButton to="Updates">News</FooterLinkButton>
                <FooterLinkButton to="TheTeam">Team</FooterLinkButton>
                <FooterLinkButton to="Schedule">Schedule</FooterLinkButton>
                <FooterLinkButton to="Partner">Partner</FooterLinkButton>
              </VStack>
            </Box>
            <Box>
              <Text
                fontWeight="bold"
                fontSize={{ base: '12px', lg: '24px' }}
                mb="23px"
              >
                READ MORE ABOUT
              </Text>
              <VStack align="start">
                <FooterLinkButton to="">Press</FooterLinkButton>
                <FooterLinkButton to="">Privacy & Coolies</FooterLinkButton>
                <FooterLinkButton to="">FAQ</FooterLinkButton>
              </VStack>
            </Box>
          </Box>
          <Box w="50%" display="flex" justifyContent="center">
            <Link
              to="#"
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'left',
                fontSize,
              }}
            >
              FOLLOW US AND {isTablet && <br />}CHECK THE{!isTablet && <br />}
              TEAM {isTablet && <br />}ACTIVITY AND {isTablet && <br />}DAILY
              LIFE
            </Link>
          </Box>
        </HStack>
      </MainLayout>
      <Box
        w="100%"
        pt="7.5px"
        pb="5px"
        bg="#fff"
        color="#000"
        fontSize={{ base: '10px', lg: '14px' }}
        fontWeight="bold"
        textAlign="center"
      >
        Copyright &copy; 2024 TCS Racing Team All Rights Reserved.
      </Box>
    </Box>
  );
};
