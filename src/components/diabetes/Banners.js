import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';

const Banner = ({data}) => {
  // {img:, title: string, content: string}
  return (
    <View style={style.container}>
      <Image source={data.img} style={style.img} />
      <View style={style.main}>
        <Text style={style.title}>Save extra on every order</Text>
        <Text style={style.content}>
          Etiam mollis metus non faucibus sollicitudin.{' '}
        </Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    position: 'relative',
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  main: {
    position: 'absolute',
    start: 20
  },
  title: {
    width: 119,
    fontSize: 18,
    color: '#1987FB',
    marginTop: 28,
    fontWeight: '700',
  },
  content: {
    width: 130,
    fontSize: 12,
  },
});
export default Banner;
