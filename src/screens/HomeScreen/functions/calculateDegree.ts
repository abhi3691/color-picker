import {
  GestureUpdateEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import {PALETTE_HEIGHT, PALETTE_WIDTH} from '../constants';

export const calculateDegree = (
  e: GestureUpdateEvent<PanGestureHandlerEventPayload>,
) => {
  'worklet';
  let degree =
    Math.atan2(PALETTE_HEIGHT - e.y, e.x - PALETTE_WIDTH / 2) * (180 / Math.PI);

  degree < -90 && (degree = degree + 360);
  return 90 - degree;
};
