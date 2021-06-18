import {StyleSheet} from 'react-native';
import COLOR from '../../helper/colors';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  Schedule: {
    backgroundColor: COLOR.BLUE,
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: COLOR.WHITE,
  },
  ScheduleContainer: {
    width: '85%',
    backgroundColor: COLOR.WHITE,
    height: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  TimeText: {
    fontSize: 16,
    color: COLOR.GRAY,
  },
  ScheduleImg: {
    tintColor: COLOR.BLUE,
    width: 25,
    height: 25,
  },
  ListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  item:{
    fontSize: 17,
    color:COLOR.GRAY,
    letterSpacing:1
  },
  Btn:{
    fontSize:17,
    fontWeight:"700",
    color:COLOR.WHITE,
    backgroundColor:COLOR.BLUE,
    paddingHorizontal:15,
    paddingVertical:5,
    borderRadius:5
  }
 
});
