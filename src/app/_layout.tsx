import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Stack } from 'expo-router'; 

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>

        <Stack.Screen name="index" options={{ headerShown: false }} />

        <Stack.Screen name="saludo" options={{ title: 'Saludo' }} />
      </Stack>
    </ThemeProvider>
  );
}
