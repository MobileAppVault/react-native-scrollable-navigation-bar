import * as React from 'react';
import { Animated, View, Text } from 'react-native';

class BigNavigationBarSubTitle extends React.Component {
  render() {
    const {
      animatedValue,
      children,
      bigSubTitleStyle,
      increaseFontSize
    } = this.props;
    return (
      <Animated.Text
        style={[
          {
            fontWeight: '600',
            fontSize: increaseFontSize
              ? animatedValue.interpolate({
                  inputRange: [-40, 0],
                  outputRange: [24, 16],
                  extrapolate: 'clamp'
                })
              : 16
          },
          bigSubTitleStyle
        ]}
      >
        {children}
      </Animated.Text>
    );
  }
}

export default BigNavigationBarSubTitle;
