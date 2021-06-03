import React from "react";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Statusbar from "../../components/Statusbar/Statusbar";
import Menu from "../../components/Menu/Menu";
import {
  ContainerLogo,
  Logo,
  ContainerContent,
  Title,
  Subtitle,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText,
  ContainerButton,
} from "./styles";

export default function Home() {
  return (
    <LinearGradient
      colors={["#1ddbb9", "#132742"]}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <Statusbar barStyle="light-content" backgroundColor="#1ddbb9" />
      <Menu />

      <ContainerLogo>
        <Logo source={require("../../assets/logo.png")} resizeMode="contain" />
      </ContainerLogo>

      <ContainerContent>
        <Title>ShorterLink</Title>
        <Subtitle>Cole seu link para encurtar</Subtitle>

        <ContainerInput>
          <BoxIcon>
            <Feather name="link" size={22} color="white" />
          </BoxIcon>
          <Input
            type="text"
            placeholder="Insira seu link aqui..."
            placeholderTextColor="#ededed"
          />
        </ContainerInput>

        <ContainerButton>
          <ButtonLink>
            <ButtonLinkText>Gerar link</ButtonLinkText>
          </ButtonLink>
        </ContainerButton>
      </ContainerContent>
    </LinearGradient>
  );
}
