import React from 'react'
import { Stack } from 'expo-router';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { AmaticSC_700Bold, AmaticSC_400Regular } from '@expo-google-fonts/amatic-sc'


SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    AmaticBold: AmaticSC_700Bold,
    AmaticRegular: AmaticSC_400Regular

  })


  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null;
  }
  {/* this will apply to all the screen , the header styles and title */ }
  return <Stack screenOptions={{ title: 'devember', headerStyle: { backgroundColor: 'red' } }}>
    {/* to target a sigle screen use filename in name prop and use options */}
    {/* to target a single screen , we can go to the screen and set the options without name prop as it is in same component */}
    <Stack.Screen name="index" options={{ title: 'DEVember' }} />
  </Stack>;
}

export default RootLayout