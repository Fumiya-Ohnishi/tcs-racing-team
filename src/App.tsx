import { ChakraProvider } from '@chakra-ui/react';
import { AppRoutes } from './routes';
import { AppProvider } from './providers/app/appProvider';

export const App = () => {
  return (
    <AppProvider>
      <ChakraProvider resetCSS={true}>
        <AppRoutes />
      </ChakraProvider>
    </AppProvider>
  );
};
