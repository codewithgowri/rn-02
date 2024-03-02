import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import DayListItem from './src/components/core/DayListItem';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { AmaticSC_700Bold, AmaticSC_400Regular } from '@expo-google-fonts/amatic-sc'

SplashScreen.preventAutoHideAsync()

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    AmaticBold: AmaticSC_700Bold,
    AmaticRegular: AmaticSC_400Regular

  })

  const days = [...Array(31)].map((item, index) => index + 1)

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.listColumn}
        data={days}
        numColumns={2}
        renderItem={({ item }) => <DayListItem day={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  box: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: 'gold',
    // borderWidth: StyleSheet.hairlineWidth,
    borderWidth: 10,
    borderColor: 'black',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black'
    , fontSize: 20,
  },
  listContainer: {
    // backgroundColor: 'red',
    rowGap: 20,
    columnGap: 20,
    padding: 10
  },
  listColumn: {
    columnGap: 20
  }
});
