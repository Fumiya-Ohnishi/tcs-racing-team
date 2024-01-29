import { NavLink } from '@/components/Elements/NavLink';
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
  useMediaQuery,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isTablet] = useMediaQuery('(max-width: 768px)');
  const mb = isTablet ? '16px' : '0';

  return (
    <Box as="header" position="fixed" top="0" left="0" zIndex="99999" w="100%">
      <Box bg="#1A1A1A" p={{ base: '33px 40px', lg: '13px 80px' }}>
        <Box position="relative" display="flex" alignItems="center">
          <Box
            position={{ base: 'unset', lg: 'absolute' }}
            top="50%"
            left="40px"
            zIndex="999"
            w={{ base: '128px', lg: '222px' }}
            h={{ base: 'auto', lg: 'auto' }}
            objectFit={{ base: 'contain', lg: 'none' }}
          >
            <RouterLink to="/">
              <Image src="/images/ico-team-logo-name.webp" alt="logo" />
            </RouterLink>
          </Box>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent mt="110px">
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <NavLink to="Updates">Updates</NavLink>
                <NavLink to="TheTeam">The Team</NavLink>
                <RouterLink to="/team-member" style={{ marginBottom: mb }}>
                  Our Team
                </RouterLink>
                <NavLink to="Schedule">Schedule</NavLink>
                <NavLink to="Partners">Partners</NavLink>
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
            <NavLink to="Updates">Updates</NavLink>
            <NavLink to="TheTeam">The Team</NavLink>
            <RouterLink to="/team-member">Our Team</RouterLink>
            <NavLink to="Schedule">Schedule</NavLink>
            <NavLink to="Partners">Partners</NavLink>
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