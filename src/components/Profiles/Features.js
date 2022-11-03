import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPortrait, faFileLines, faClock, faCircleQuestion, faGear, faStethoscope } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <ScrollView>
      <View style={style.featureList}>
        <View style={style.featureItem}>
          <FontAwesomeIcon icon={faPortrait} style={style.iconItem} size={24} />
          <Text style={style.title}>Private Account</Text>
        </View>
        <View style={style.featureItem}>
          <FontAwesomeIcon
            icon={faStethoscope}
            style={style.iconItem}
            size={24}
          />
          <Text style={style.title}>My Consults</Text>
        </View>
        <View style={style.featureItem}>
          <FontAwesomeIcon
            icon={faFileLines}
            style={style.iconItem}
            size={24}
          />
          <Text style={style.title}>My orders</Text>
        </View>
        <View style={style.featureItem}>
          <FontAwesomeIcon icon={faClock} style={style.iconItem} size={24} />
          <Text style={style.title}>Billing</Text>
        </View>
        <View style={style.featureItem}>
          <FontAwesomeIcon
            icon={faCircleQuestion}
            style={style.iconItem}
            size={24}
          />
          <Text style={style.title}>Faq</Text>
        </View>
        <View style={style.featureItem}>
          <FontAwesomeIcon icon={faGear} style={style.iconItem} size={24} />
          <Text style={style.title}>Settings</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  featureList:{
    marginTop: 30
  },
  featureItem: {
    flexDirection: 'row',
    height: 50,
    marginTop: 10
  },
  iconItem: {
    color: '#404258',
  },
  title:{
    marginLeft: 10,
    borderBottomWidth: 1,
    width: 300
  }
});
export default Features;
