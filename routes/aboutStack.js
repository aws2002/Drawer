import Header from "../shared/header";
import About from "../screens/about";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function AboutStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerStyle: { backgroundColor: "#333" },
        // headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitle: () => <Header title="osama" navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  );
}
