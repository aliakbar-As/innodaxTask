import { Platform } from 'react-native'
import stores from '../stores';

export const font = Platform.select({

  android:
    stores.home.currentLanguage === 'en' ?
      { fontFamily: 'num' }
      :
      { fontFamily: 'num' }
  ,
  ios:
    stores.home.currentLanguage === 'en' ?
      {}
      :
      {
        fontFamily: 'num',
        marginTop: 4,
      }
});

export const fontBold = () => {
  if (stores.home.currentLanguage === 'en') {
    return 'num'
  } else {
    return 'row-reverse'
  }
};

export const row = () => {
  if (stores.home.currentLanguage === 'en') {
    return 'row'
  } else {
    return 'row-reverse'
  }
};
export const flex = () => {
  if (stores.home.currentLanguage === 'en') {
    return 'flex-start'
  } else {
    return 'flex-end'
  }
};

export const position = () => {
  if (stores.home.currentLanguage === 'en') {
    return 'left'
  } else {
    return 'right'
  }
};
