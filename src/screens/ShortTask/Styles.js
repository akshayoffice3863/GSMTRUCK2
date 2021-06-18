import {StyleSheet} from 'react-native';
import COLOR from '../../helper/colors';
import FONT from '../../helper/fonts';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  ListHading: {
    fontSize: 18,
    color: COLOR.GRAY,
    fontWeight: '800',
  },
  ListHadingContainer: {
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22, 
    elevation: 3,
  },
  ListContainer: {
    flexDirection: 'row',
    
    alignItems: 'center',
    marginVertical: 5,
    
    width:"100%"
  },
  item:{
    fontSize: 15,
    color:COLOR.GRAY,
    letterSpacing:1,
  },
});
