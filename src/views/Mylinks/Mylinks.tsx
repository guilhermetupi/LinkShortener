import React from "react";
import { View, Text } from "react-native";
import Menu from "../../components/Menu/Menu";
import Statusbar from "../../components/Statusbar/Statusbar";

export default function Mylinks() {
  return (
    <View>
      <Menu />
      <Statusbar barStyle="light-content" backgroundColor="#132742" />
      <Text>Pagina My Links</Text>
    </View>
  );
}
