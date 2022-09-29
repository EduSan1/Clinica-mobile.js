import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, ScrollView, Text, View } from 'react-native';
import RegisterPage from './src/pages/Register';

export default function App() {
  return (
     <SafeAreaView >
      <StatusBar  />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
       
        <RegisterPage></RegisterPage>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
