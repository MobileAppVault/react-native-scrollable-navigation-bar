import * as React from 'react';
import { Animated, View, Text, StatusBar, Platform } from 'react-native';
import { isIphoneX, getStatusBarHeight } from './constants';

class NavigationBarTitle extends React.Component {
  render() {
    const { children, titleStyle } = this.props;
    return (
      <View
        pointerEvents="box-none"
        style={{
          position: 'absolute',
          top: Platform.OS === 'ios' ? (isIphoneX() ? getStatusBarHeight() : 20)  : StatusBar.currentHeight,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Animated.Text
          style={[{ fontSize: 18, fontWeight: '600' }, titleStyle]}
        >
          {children}
        </Animated.Text>
      </View>
    );
  }
}

export default NavigationBarTitle;
