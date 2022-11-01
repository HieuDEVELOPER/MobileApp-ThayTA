import {transform} from '@babel/core';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';

const Sale = ({title = ''}) => {
  return (
    <>
      <View
        style={{
          height: 50,
          width: 50,
          backgroundColor: 'red',
          position: 'absolute',
          top: 0,
          start: 0,
          zIndex: 100,
          borderBottomColor: 'transparent',
          transform: [{rotate: '45deg'}, {translateX: -35}, {translateY: 0}],
        }}></View>
      <Text
        style={{
          position: 'absolute',
          top: 5,
          start: 3,
          zIndex: 1000,
          transform: [{rotate: '-45deg'}],
          fontSize: 10,
          fontWeight: '600',
        }}>
        {title}
      </Text>
    </>
  );
};

const Votes = ({numOfVotes}) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: '10%',
        end: 0,
        width: '40%',
        alignItems: 'center',
        backgroundColor: '#FD841F',
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
      }}>
      <Text style={{color: 'white'}}>{numOfVotes}</Text>
    </View>
  );
};
const Product = ({data, width, isSale = false}) => {
  // const renderItem = ({item}) => <Item title={item.title} img={item.img} />;

  return (
    <TouchableOpacity
      style={[{width, height: 1.5 * width}, style.productContainer]}>
      {isSale && <Sale title='Sale'/>}
      <Image source={data.img} style={style.img} resizeMode="cover"/>
      <View style={style.main}>
        <Text numberOfLines={2} style={style.name}>
          {data.name}
        </Text>
        {data.price && <Text>${data.price}</Text>}
      </View>
      {data.votes && <Votes numOfVotes={data.votes} />}
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  productContainer: {
    backgroundColor: '#F5F7FA',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '60%'
  },
  main: {
    marginTop: 2
  },
  name: {
    fontSize: 18,
  },
  price: {},
  votes: {},
  sale: {},

  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default Product;
