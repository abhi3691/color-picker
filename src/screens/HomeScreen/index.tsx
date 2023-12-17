/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, StatusBar, View} from 'react-native';
import React, {Fragment, useState} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {calculateDegree} from './functions/calculateDegree';
import {useSharedValue} from 'react-native-reanimated';
import {COLOR_PALETTE} from './constants';
import styles from './styles';
import PaletteItem from './orginization/PaletteItem';

const HomeScreen = () => {
  const gestureDegree = useSharedValue(0);
  const [activeColor, setActiveColor] = useState('rgb(64, 68, 88)');

  const dragesture = Gesture.Pan()
    .onStart(e => {
      gestureDegree.value = calculateDegree(e);
    })
    .onUpdate(e => {
      gestureDegree.value = calculateDegree(e);
    })
    .onEnd(() => {
      gestureDegree.value = gestureDegree.value > 90 ? 90 : 0;
    });
  return (
    <Fragment>
      <StatusBar barStyle={'light-content'} backgroundColor={activeColor} />
      <SafeAreaView style={[styles.container, {backgroundColor: activeColor}]}>
        <GestureDetector gesture={dragesture}>
          <View style={[styles.paletteSize, {margin: 40}]}>
            {COLOR_PALETTE.map((colors, index) => (
              <PaletteItem
                {...{
                  colors,
                  index,
                  gestureDegree,
                  activeColor,
                }}
                onColorPress={setActiveColor}
                key={index}
              />
            ))}
          </View>
        </GestureDetector>
      </SafeAreaView>
    </Fragment>
  );
};

export default HomeScreen;
