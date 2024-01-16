import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { MainLayout } from './MainLayout';
import { Link } from 'react-router-dom';

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
                <Link
                  to="#"
                  style={{
                    color: '#8B8B8B',
                    fontSize: '16px',
                    marginBottom: '18px',
                  }}
                >
                  News
                </Link>
                <Link
                  to="#"
                  style={{
                    color: '#8B8B8B',
                    fontSize: '16px',
                    marginBottom: '18px',
                  }}
                >
                  Team
                </Link>
                <Link
                  to="#"
                  style={{
                    color: '#8B8B8B',
                    fontSize: '16px',
                    marginBottom: '18px',
                  }}
                >
                  Schedule
                </Link>
                <Link
                  to="#"
                  style={{
                    color: '#8B8B8B',
                    fontSize: '16px',
                  }}
                >
                  Partner
                </Link>
              </VStack>
            </Box>
            <Box>
              <Text fontWeight="bold" fontSize="24px" mb="23px">
                READ MORE ABOUT
              </Text>
              <VStack align="start">
                <Link
                  to="#"
                  style={{
                    color: '#8B8B8B',
                    fontSize: '16px',
                    marginBottom: '18px',
                  }}
                >
                  Press
                </Link>
                <Link
                  to="#"
                  style={{
                    color: '#8B8B8B',
                    fontSize: '16px',
                    marginBottom: '18px',
                  }}
                >
                  Privacy & Coolies
                </Link>
                <Link
                  to="#"
                  style={{
                    color: '#8B8B8B',
                    fontSize: '16px',
                    marginBottom: '18px',
                  }}
                >
                  FAQ
                </Link>
                <Link
                  to="#"
                  style={{
                    color: '#8B8B8B',
                    fontSize: '16px',
                  }}
                >
                  Contact
                </Link>
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
