import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MarketScreen from '../screens/MarketScreen';
import StakeScreen from '../screens/StakeScreen';
import SpotScreen from '../screens/SpotScreen';
import FutureScreen from '../screens/FutureScreen';
import WalletScreen from '../screens/WalletScreen';
import CustomBottomTabs from '../components/CustomBottomTabs';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomBottomTabs {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Market" component={MarketScreen} />
      <Tab.Screen name="Stake" component={StakeScreen} />
      <Tab.Screen name="Spot" component={SpotScreen} />
      <Tab.Screen name="Future" component={FutureScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
    </Tab.Navigator>
  );
}
