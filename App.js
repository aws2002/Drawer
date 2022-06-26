import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppHeader from "./shared/AppHeader";
import DrawerNavigation from "./routes/drawerNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
      {/* <AppHeader
        title={"Home"}
        headerBg={"#000000"}
        iconColor={"#fff"}
        menu //or back
        optionalBadge={4}
        titleAlight="center"
        // navigation={props.navigation}
        right="more-vertical"
        rightFunction={() => console.log("right")}
        optionalIcon="bell"
        optionalFunc={() => console.log("optional")}
      /> */}
    </NavigationContainer>
  );
}
