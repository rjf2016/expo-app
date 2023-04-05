import { registerRootComponent } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './styles.css';

import App from '@core/App';

const Root = () => {
  return (
    <SafeAreaProvider className="bg-sky-200">
      <App />
    </SafeAreaProvider>
  );
};

export default registerRootComponent(Root);
