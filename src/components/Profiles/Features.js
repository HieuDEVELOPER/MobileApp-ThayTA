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
          <Text>Private Account</Text>
        </View>
        <View style={style.featureItem}>
          <FontAwesomeIcon icon={faStethoscope} style={style.iconItem} size={24} />
          <Text>My Consults</Text>
        </View>
        <View style={style.featureItem}>
          <FontAwesomeIcon icon={faFileLines} style={style.iconItem} size={24} />
          <Text>My orders</Text>
        </View>
        <View style={style.featureItem}>
          <FontAwesomeIcon icon={faClock} style={style.iconItem} size={24} />
          <Text>Billing</Text>
        </View>
        <View style={style.featureItem}>
          <FontAwesomeIcon icon={faCircleQuestion} style={style.iconItem} size={24} />
          <Text>Faq</Text>
        </View>
        <View style={style.featureItem}>
          <FontAwesomeIcon icon={faGear} style={style.iconItem} size={24} />
          <Text>Settings</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  featureItem:{
    flexDirection: "row"
  },
  iconItem:{
    color:"blue"
  }
});
export default Features;
