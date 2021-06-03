import styled from "styled-components/native";
import { Platform } from "react-native";

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === "ios" ? 35 + "px" : 15 + "px"};
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const ContainerContent = styled.View`
  margin-top: ${Platform.OS === "ios" ? 15 + "%" : 10 + "%"};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 35px;
  color: white;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  color: white;
  padding-bottom: 10%;
`;

export const ContainerInput = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  border-radius: 7px;
  margin: 15px 0;
  padding: 0 15px;
`;

export const BoxIcon = styled.View`
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  width: 11%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.15);
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`;

export const Input = styled.TextInput`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.15);
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  color: white;
`;

export const ContainerButton = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;
  padding: 0 15px;
`;

export const ButtonLink = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  background-color: white;
`;

export const ButtonLinkText = styled.Text`
  font-size: 18px;
  color: #333;
`;
