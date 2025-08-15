import { type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { SafeAreaView } from 'react-native-safe-area-context';

export type ThemedSafeAreaProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedSafeAreaView({ style, lightColor, darkColor, ...otherProps }: ThemedSafeAreaProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

//   return <View style={[{ backgroundColor }, style]} {...otherProps} />;
  return <SafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
}
