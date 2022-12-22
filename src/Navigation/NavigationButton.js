import {
  faHome,
  faMapLocationDot,
  faPlus,
  faUser,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import {
  DiabetesScreen,
  FlatListScreen,
  HomeScreen,
  MapScreen,
  ProfileScreen,
} from '../screens';
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

      <Tab.Screen
        name="Flat"
        component={FlatListScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesomeIcon
                icon={faList}
                size={24}
                resizeMode="contain"
                color={focused ? '#5837D0' : '#5DA7DB'}
              />
              <Text>Flat</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
