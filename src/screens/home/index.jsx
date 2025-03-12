import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const buttons = [
    { title: "Scan QR Code", path: "Scan QR Code" },
    { title: "Scan License", path: "Scan License" },
    { title: "Scan Permit", path: "Scan Permit" },
  ];

  return (
    <SafeAreaView style={[styles.container]}>
      <Text>Home Screen</Text>

      <View></View>

      <View style={[styles.buttonsContainer]}>
        {(buttons ?? []).map((btn, index) => (
          <View key={index} style={[styles.buttonContainer]}>
            <Button
              onPress={() => {
                navigation.navigate(btn.path)
              }}
              title={btn.title}
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
