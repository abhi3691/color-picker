import {StyleSheet} from 'react-native';
import {PALETTE_HEIGHT, PALETTE_WIDTH} from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  paletteSize: {
    width: PALETTE_WIDTH,
    height: PALETTE_HEIGHT,
  },
});

export default styles;
