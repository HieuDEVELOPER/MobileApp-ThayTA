import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/Navigation/NavigationButton";

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
