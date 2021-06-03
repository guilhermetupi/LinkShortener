import React from "react";
import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";

export default function Statusbar(props: any) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}
