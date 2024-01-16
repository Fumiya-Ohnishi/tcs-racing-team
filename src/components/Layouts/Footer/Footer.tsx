import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../MainLayout';
import { FooterLinkButton } from './FooterLinkButton';

export const Footer = () => {
  return (
    <Box pt="117px">
      <MainLayout>
        <HStack alignItems="start" mb="37px">
          <HStack w="50%" justifyContent="space-between">
            <Box>
              <Text fontWeight="bold" fontSize="24px" mb="23px">
                USEFUL LINKS
              </Text>
              <VStack align="start">
                <FooterLinkButton text="News" url="#" />
                <FooterLinkButton text="Team" url="#" />
                <FooterLinkButton text="Schedule" url="#" />
                <FooterLinkButton text="Partner" url="#" />
              </VStack>
            </Box>
            <Box>
              <Text fontWeight="bold" fontSize="24px" mb="23px">
                READ MORE ABOUT
              </Text>
              <VStack align="start">
                <FooterLinkButton text="Press" url="#" />
                <FooterLinkButton text="Privacy & Coolies" url="#" />
                <FooterLinkButton text="FAQ" url="#" />
                <FooterLinkButton text="Contact" url="#" />
              </VStack>
            </Box>
          </HStack>
          <Box w="50%" display="flex" justifyContent="center">
            <Link
              to="#"
              style={{
                color: '#fff',
                fontSize: '24px',
                fontWeight: 'bold',
                textAlign: 'left',
              }}
            >
              FOLLOW US AND CHECK THE <br />
              TEAM ACTIVITY AND DAILY LIFE
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
        fontSize="14px"
        fontWeight="bold"
        textAlign="center"
      >
        Copyright &copy; 2024 TCS Racing Team All Rights Reserved.
      </Box>
    </Box>
  );
};
