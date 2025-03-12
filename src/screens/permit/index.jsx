import React from "react";
import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import CameraViewComponent from "../../components/camera";
import useRecognizeText from "../../hooks/recognise-text";

const PermitScreen = () => {
  const { recognizeText, loading, recognizedText } = useRecognizeText();

  const handleSetImage = async (image) => {
    console.log("Image", image);
    await recognizeText(image);
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <Text>Permit Scan Screen</Text>
      <CameraViewComponent intent={"permit"} setImage={handleSetImage} />
    </SafeAreaView>
  );
};

export default PermitScreen;
