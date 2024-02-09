import { ChakraProvider } from '@chakra-ui/react';
import { AppRoutes } from './routes';
import { AppProvider } from './providers/app/appProvider';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <AppProvider>
      <RecoilRoot>
        <ChakraProvider resetCSS={true}>
          <AppRoutes />
        </ChakraProvider>
      </RecoilRoot>
    </AppProvider>
  );
};

export default App;
