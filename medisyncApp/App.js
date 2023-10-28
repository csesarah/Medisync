import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/components/Navigation';
import { Context, Provider } from './src/components/globalContext';

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
