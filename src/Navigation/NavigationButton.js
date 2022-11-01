import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HomeScreen, DiabetesScreen, ProfileScreen} from '../screens';



const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="diabetes" component={DiabetesScreen} />
      <Tab.Screen name="Myprofile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = {
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'grey',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
};
