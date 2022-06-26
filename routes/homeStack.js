import Header from "../shared/header";
import Home from "../screens/Home";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import ReviewDetails from "../screens/reviewDetails";
const Stack = createStackNavigator();
export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerStyle: { backgroundColor: "#fff0ff"},
          // headerTintColor: "#fff",
          
        }
      }
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header title="Home" navigation={navigation} />,
          headerStyle:{backgroundColor:"#333"}
        }}
        
      />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
    </Stack.Navigator>
  );
}
