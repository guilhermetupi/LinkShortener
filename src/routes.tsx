import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./views/Home/Home";
import Mylinks from "./views/Mylinks/Mylinks";

import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeBackgroundColor: "#2CCBB9",
        activeTintColor: "#fff",
        style: { marginTop: 15 },
        labelStyle: {
          fontSize: 19,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Encurtar Link",
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "cube" : "cube-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Mylinks"
        component={Mylinks}
        options={{
          title: "Meus Link",
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "stats-chart" : "stats-chart-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
