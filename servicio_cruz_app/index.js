import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import NavigationApp from './src/components/NavigationApp';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => NavigationApp);
