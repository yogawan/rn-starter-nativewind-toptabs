import "./global.css";
import { Text, View, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopTabNavigator from './navigation/TopTabNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* StatusBar */}
      <StatusBar backgroundColor="#171717" barStyle="light-content" />

      <View style={{ flex: 1 }}>
        {/* AppBar */}
        <View className="w-full py-4 px-4 bg-primary">
          <Text className="text-white/75 text-lg font-bold">Triv</Text>
        </View>

        {/* Navigation */}
        <NavigationContainer>
          <TopTabNavigator />
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}
