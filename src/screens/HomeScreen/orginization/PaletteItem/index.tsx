import React, {FC} from 'react';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {COLOR_PALETTE, PALETTE_HEIGHT} from '../../constants';
import styles from './styles';
import SinglePalette from '../../molecules/singlePalette';
import AnchorButton from '../../molecules/anchorButton';

interface paletteProps {
  colors: string[];
  index: number;
  gestureDegree: SharedValue<number>;
  activeColor: string;
  onColorPress: (color: string) => void;
}
const PaletteItem: FC<paletteProps> = ({
  colors,
  index,
  gestureDegree,
  activeColor,
  onColorPress,
}) => {
  const viewStyle = useAnimatedStyle(() => {
    const angle = (gestureDegree.value / (COLOR_PALETTE.length - 1)) * index;
    return {
      transform: [
        {translateY: (PALETTE_HEIGHT - 50) / 2},
        {
          rotate: withSpring(`${angle}deg`, {damping: 100, mass: 0.4}),
        },
        {translateY: -(PALETTE_HEIGHT - 50) / 2},
      ],
    };
  }, []);

  const onAnchorPress = () =>
    (gestureDegree.value = gestureDegree.value === 0 ? 90 : 0);

  return (
    <Animated.View
      style={[styles.paletteContainer, styles.paletteSize, viewStyle]}>
      {colors.map((col, ci) => (
        <SinglePalette
          ci={ci}
          col={col}
          colors={colors}
          key={ci}
          onColorPress={onColorPress}
        />
      ))}
      <AnchorButton activeColor={activeColor} onAnchorPress={onAnchorPress} />
    </Animated.View>
  );
};

export default PaletteItem;
