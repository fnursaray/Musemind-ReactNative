import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/router/rootNavigator';
import {Provider} from 'react-redux';
import store from './src/store';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Provider store={store}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </Provider>
    </ApplicationProvider>
  );
}
