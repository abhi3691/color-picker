/* eslint-disable react-native/no-inline-styles */
import {Pressable} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';

interface props {
  col: string;
  ci: number;
  colors: string[];
  onColorPress: (color: string) => void;
}

const SinglePalette: FC<props> = ({ci, col, colors, onColorPress}) => {
  return (
    <Pressable
      key={ci}
      style={[
        styles.colorItem,
        ci === 0 && styles.colorTop,
        {
          backgroundColor: col,
          marginBottom: ci < colors.length - 1 ? 4 : 0,
        },
      ]}
      onPress={() => onColorPress(col)}
    />
  );
};

export default SinglePalette;
