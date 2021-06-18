import {StyleSheet} from 'react-native';
import COLORS from '../../helper/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLUE,
  },
  CLOSE_BTN: {
    alignSelf: 'flex-end',
    marginRight: 30,
    marginTop: 30,
    tintColor: COLORS.WHITE,
  },
  DRAWER_BTN: {
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: COLORS.WHITE,
    paddingVertical: 12,
    marginVertical: 10,
    marginHorizontal: 40,
  },
  LOGOUT_BTN: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 25,
  },
});
