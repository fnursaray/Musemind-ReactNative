import ThemeColors from '../theme/colors';
import {statusTypes} from './constants';

const setColor = status => {
  switch (status) {
    case statusTypes.COMPLATED:
      return ThemeColors.blue;
    case statusTypes.INPROGRESS:
      return ThemeColors.yellow;
    case statusTypes.INREVIEW:
      return ThemeColors.darkblue;
    case statusTypes.ONHOLD:
      return ThemeColors.green;

    default:
      return ThemeColors.white;
  }
};

export {setColor};
