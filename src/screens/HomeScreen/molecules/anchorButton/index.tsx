import {Pressable, View} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';

interface props {
  onAnchorPress: () => void;
  activeColor: string;
}

const AnchorButton: FC<props> = ({onAnchorPress, activeColor}) => {
  return (
    <Pressable style={styles.anchorContainer} onPress={onAnchorPress}>
      <View style={[styles.anchorOuterCircle, {borderColor: activeColor}]}>
        <View
          style={[styles.anchorInnerCircle, {backgroundColor: activeColor}]}
        />
      </View>
    </Pressable>
  );
};

export default AnchorButton;
