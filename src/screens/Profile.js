import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import Features from '../components/Profiles/Features';
const ProfileScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.profile}>
        <Image source={require('../assets/img/hieu.jpg')} style={style.myAvt} />
        <Text style={style.yourName}>Hi, Hieu Nguyen</Text>
        <Text style={style.wc}>Welcome to Medtech</Text>
        <Features />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
   
  },
  profile:{
    marginLeft:23
  },
  myAvt: {
    width: 62,
    height: 62,
    borderRadius: 100,
    borderColor: '#ffffff',
    borderWidth: 3,
  },
  yourName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#091C3F',
    position: 'absolute',
    left: 101,
    marginTop: 12,
  },
  wc: {
    fontSize: 14,
    fontWeight: '400',
    color: '#404258',
    position: 'absolute',
    left: 101,
    marginTop: 35,
  },
});
export default ProfileScreen;
