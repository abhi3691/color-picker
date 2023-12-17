import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  anchorContainer: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  anchorOuterCircle: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  anchorInnerCircle: {
    height: 16,
    width: 16,
    borderRadius: 16 / 2,
  },
});

export default styles;
