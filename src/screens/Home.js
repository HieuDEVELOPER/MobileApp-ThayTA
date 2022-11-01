import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Search from '../components/home/Search';
const HomeScreen =()=>{
    return (
      <View style={style.onTop}>
        <View>
          <Image source={require('../assets/img/hieu.jpg')} style={style.avt} />
        </View>

        <FontAwesomeIcon icon={faBell} style={style.bell} size={24} />
        <FontAwesomeIcon icon={faBagShopping} style={style.bag} size={24} />
        <Text style={style.say}>Hi, Hieu</Text>
        <Text style={style.wc}>Welcome to Medtech</Text>
        <Search/>
      </View>
    );

}
const style = StyleSheet.create({
  onTop: {
    height: 215,

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#3D50E7',
  },
  avt: {
    width: 42,
    height: 42,
    position: 'absolute',
    marginTop: 52,
    marginLeft: 26,
    borderRadius: 100,
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  bell: {
    color: '#ffffff',
    position: 'absolute',
    marginTop: 61,
    right: 65,
  },
  bag: {
    color: '#ffffff',
    position: 'absolute',
    marginTop: 61,
    right: 25,
  },
  say: {
    position: 'absolute',
    marginTop: 110,
    left: 26,
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
  },
  wc: {
    position: 'absolute',
    marginTop: 150,
    left: 26,
    fontSize: 16,
    fontWeight: '300',
    color: '#ffffff',
  },
});

export default HomeScreen