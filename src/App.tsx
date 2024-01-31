import { ChakraProvider } from '@chakra-ui/react';
import { AppRoutes } from './routes';
import { AppProvider } from './providers/app/appProvider';

const App = () => {
  return (
    <AppProvider>
      <ChakraProvider resetCSS={true}>
        <AppRoutes />
      </ChakraProvider>
    </AppProvider>
  );
};

export default App;
