import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Banner from '../components/diabetes/Banners';
import TopProduct from '../components/diabetes/TopProducts';
import AllProducts from '../components/diabetes/AllProducts';
const DiabetesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={25}
          style={{marginHorizontal: 10}}
        />
        <Text style={styles.title}>Diabetes Care</Text>
      </View>
        <View style={styles.banner}>
          <Banner data={{img: require('../assets/img/banner1.png')}} />
        </View>
        <View style={styles.main}>
          <TopProduct />
          <AllProducts />
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 10,
  },
  banner: {
    flex: 1,
    paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 10,
  },
  main: {
    flex: 4,
  },
});
export default DiabetesScreen;
