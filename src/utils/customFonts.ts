import * as Font from 'expo-font';

import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

const fonts = {
  'Poppins-Regular': Poppins_400Regular,
  'Poppins-SemiBold': Poppins_600SemiBold,
  'Poppins-Bold': Poppins_700Bold,
};

export const loadCustomFonts = async () => {
  await Font.loadAsync(fonts);
};
