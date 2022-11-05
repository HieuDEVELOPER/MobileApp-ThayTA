import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HomeScreen, DiabetesScreen, ProfileScreen, MapScreen} from '../screens';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHome, faPlus, faUser, faMapLocationDot
} from '@fortawesome/free-solid-svg-icons';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          
          elevation: 0,
          backgroundColor: '#7DE5ED',
          borderRadius: 15,
          height: 75,
        },
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesomeIcon
                icon={faHome}
                size={24}
                resizeMode="contain"
                color={focused ? '#5837D0' : '#5DA7DB'}
              />
              <Text>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="diabetes"
        component={DiabetesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesomeIcon
                icon={faPlus}
                size={45}
                resizeMode="contain"
                color={focused ? '#5837D0' : '#5DA7DB'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Myprofile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesomeIcon
                icon={faUser}
                size={24}
                resizeMode="contain"
                color={focused ? '#5837D0' : '#5DA7DB'}
              />
              <Text>My Profile</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesomeIcon
                icon={faMapLocationDot}
                size={24}
                resizeMode="contain"
                color={focused ? '#5837D0' : '#5DA7DB'}
              />
              <Text>Map</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

