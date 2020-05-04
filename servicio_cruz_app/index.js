import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import NavigationApp from './Navigation';
import TapHeaderHome from './src/components/TabHeaderHome';
//ok

import HomeDetail from './src/components/HomeWithDet';//ok for test
import HomeTap from './src/components/HomeTap';//ok too
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => TapHeaderHome);
