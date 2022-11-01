import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import diet from '../../data/diet';
import Product from './Product';

const TopProduct = () => (
  <View style={styles.Cards}>
    <Text style={{marginVertical: 10}}>Diabetic Diet</Text>
    <FlatList
      style={styles.productList}
      data={diet}
      renderItem={({item}) => <Product data={item} width={100} />}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);
const styles = StyleSheet.create({
  productList: {
  },
});
export default TopProduct;
