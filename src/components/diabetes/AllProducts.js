import {FlatList, StyleSheet, Text, View} from 'react-native';
import products from '../../data/products';
import Product from './Product';

const AllProducts = () => {
  return (
    <View style={styles.productContainer}>
      <Text style={{marginVertical: 10}}>All products</Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <Product data={item} width={158} isSale={true} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  productContainer: {
    marginVertical: 30,
    backgroundColor: '#ffffff',
    
  },
  
});
export default AllProducts;
