import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, StatusBar } from 'react-native';

export default function ScreenWrapper({ children }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      {children}
    </SafeAreaView>
  );
}