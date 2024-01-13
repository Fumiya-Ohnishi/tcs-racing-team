import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Image,
  Select,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header">
      <Box bg="#1A1A1A" p={{ base: '33px 40px', lg: '13px 80px' }}>
        <Box position="relative" display="flex" alignItems="center">
          <Box
            position={{ base: 'unset', lg: 'absolute' }}
            top="50%"
            left="40px"
            zIndex="999"
            w={{ base: '80px', lg: 'auto' }}
            h={{ base: '80px', lg: 'auto' }}
            objectFit={{ base: 'contain', lg: 'none' }}
          >
            <Image src="/images/ico-header-logo.png" alt="logo" />
          </Box>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <Box color="#000" mb="10px">
                  Updates
                </Box>
                <Box color="#000" mb="10px">
                  Our Team
                </Box>
                <Box color="#000" mb="10px">
                  Schedule
                </Box>
                <Box color="#000" mb="10px">
                  Partners
                </Box>
                <Box color="#000" mb="10px">
                  Contact
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <Spacer display={{ base: 'none', lg: 'block' }} />
          <HStack
            spacing="41px"
            color="#fff"
            mr="16px"
            display={{ base: 'none', lg: 'flex' }}
          >
            <Box>Updates</Box>
            <Box>Our Team</Box>
            <Box>Schedule</Box>
            <Box>Partners</Box>
            <Box>Contact</Box>
          </HStack>

          <Spacer display={{ base: 'block', lg: 'none' }} />

          <Select w="80px" h="26px" bg="#fff" mr={{ base: '16px', lg: '0px' }}>
            <option value="jp">JP</option>
            <option value="en">EN</option>
          </Select>

          <Box
            display={{ base: 'block', lg: 'none' }}
            ml="auto"
            onClick={onOpen}
            cursor="pointer"
          >
            <Box w="30px" h="2px" bg="#fff" mb="5px" />
            <Box w="30px" h="2px" bg="#fff" mb="5px" ml="8px" />
            <Box w="30px" h="2px" bg="#fff" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
