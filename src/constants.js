import { Platform, StatusBar, Dimensions } from 'react-native';

export const ViewportHeight = Dimensions.get('window').height;
export const ViewportWidth = Dimensions.get('window').width;

export function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
      Platform.OS === 'ios' &&
      ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
  );
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
      return iphoneXStyle;
  }
  return regularStyle;
}

export function getStatusBarHeight(safe) {
  return Platform.select({
      ios: ifIphoneX(safe ? 44 : 30, 20),
      android: StatusBar.currentHeight
  });
}

export function getBottomSpace() {
  return isIphoneX() ? 34 : 0;
}

export const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios' ? (isIphoneX() ? getStatusBarHeight() : 20) : StatusBar.currentHeight;
export const NAVIGATION_BAR_HEIGHT = 60 + STATUS_BAR_HEIGHT;

export default {
  STATUS_BAR_HEIGHT,
  NAVIGATION_BAR_HEIGHT
};
