import {StyleSheet} from 'react-native';
import COLORS from '../../helper/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },

  HeaderBookingDetails: {
    backgroundColor: COLORS.BLUE,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txttitle: {
    fontSize: 16,
    letterSpacing: 0.5,
    fontWeight: '700',
    color: COLORS.BLACK,
  },
  RowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 15,
  },
  Hading: {
    width: '40%',
    color: COLORS.BLACK,
    fontSize: 16,
    fontWeight: '800',
  },
  Data: {
    color: COLORS.GRAY,
    width: '60%',
    fontSize: 16,
  },

  ScheduleContainer: {
    width: '60%',
    backgroundColor: COLORS.WHITE,
    height: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  TimeText: {
    fontSize: 16,
    color: COLORS.GRAY,
  },
  ScheduleImg: {
    tintColor: COLORS.BLUE,
    width: 25,
    height: 25,
  },
  UploadBtn: {
    backgroundColor: COLORS.BLUE,

    paddingVertical: 5,
    borderRadius: 5,
    width: '40%',
    alignItems:"center"
  },
  UploadBtnText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: '700',
  },
  BtnContainer:{
    marginBottom:20
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 5,
    elevation: 10,
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModelHeader:{
    fontSize:20,
    color:COLORS.BLACK,
    fontWeight:"600"
  },
  ModalBtn:{
    color:COLORS.BLACK,
    alignSelf:"flex-start",
    fontSize:17,
    fontWeight:"400",
    marginBottom:17
  },
  header: {
    width: '100%',
    
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-between",
  },
});
