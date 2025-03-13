import React, { useEffect } from "react";
import { ActivityIndicator, SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import CameraViewComponent from "../../components/camera";
import useRecognizeText from "../../hooks/recognise-text";

const LicenseScreen = () => {
  const { recognizeText, loading, recognizedText } = useRecognizeText();

  const handleSetImage = async (image) => {
    console.log("Image", image);
    const response = await recognizeText(image);

    alert(JSON.stringify(recognizedText) ?? "Failed to recognize");
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <Text>LicenseScreen</Text>
      <CameraViewComponent intent={"license"} setImage={handleSetImage} />
    </SafeAreaView>
  );
};

export default LicenseScreen;
