import * as React from 'react';
import { View, Text, Animated } from 'react-native';
import BigNavigationBarTitle from './BigNavigationBarTitle';
import BigNavigationBarSubTitle from './BigNavigationBarSubTitle';
import NavigationBar from './NavigationBar';

class BigNavigationBar extends React.Component {
  render() {
    const {
      animatedValue,
      height,
      backgroundColor,
      borderColor,
      bigTitleStyle,
      title,
      bigSubTitleStyle,
      subTitle,
      increaseFontSize,
      pointerEvents
    } = this.props;

    return (
      <Animated.View
        pointerEvents={pointerEvents}
        style={{
          height: height,
          justifyContent: 'flex-end',
          padding: 15,
          backgroundColor,
          borderBottomWidth: borderColor !== undefined ? 1 : 0,
          borderBottomColor: borderColor
        }}
      >
        <BigNavigationBarTitle
          animatedValue={animatedValue}
          bigTitleStyle={bigTitleStyle}
          increaseFontSize={increaseFontSize}
        >
          {title}
        </BigNavigationBarTitle>
        {
          subTitle && subTitle != ""
        ? <BigNavigationBarSubTitle
            animatedValue={animatedValue}
            bigSubTitleStyle={bigSubTitleStyle}
            increaseFontSize={increaseFontSize}
          >
            {subTitle}
          </BigNavigationBarSubTitle>
        : null
        }
      </Animated.View>
    );
  }
}

export default BigNavigationBar;
