import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { View, Text, TextInput, StyleSheet } from "react-native"
const Search = () => {
    return (
      <View>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={style.searchIcon} />
        <TextInput
          style={style.search}
          placeholder="Search Medicine & Healthcare products"></TextInput>
      </View>
    );
};
const style = StyleSheet.create({
  search: {
    backgroundColor: '#ffffff',
    height: 50,
    width: 327,
    textAlign: 'center',
    borderRadius: 56,
    position: 'absolute',
    marginTop: 190,
    left: 40,
  },
  searchIcon: {
    color: '#090F47',
    opacity: 60,
    zIndex: 10,
    position: 'absolute',
    marginTop: 207,
    left: 55,
  },
});
export default Search