import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";
export default function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  );
}
