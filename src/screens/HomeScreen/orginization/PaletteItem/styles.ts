import {StyleSheet} from 'react-native';
import {PALETTE_HEIGHT, PALETTE_WIDTH} from '../../constants';

const styles = StyleSheet.create({
  paletteSize: {
    width: PALETTE_WIDTH,
    height: PALETTE_HEIGHT,
  },

  paletteContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 20,
  },
  colorItem: {
    flex: 1,
    width: '100%',
    borderRadius: 8,
  },
  colorTop: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default styles;
