import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

const CameraViewComponent = ({ intent = null, setImage = () => {} }) => {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [imageUri, setImageUri] = useState(null);

  useState(() => {
    console.log("Intent", intent);
  }, [intent]);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const captureAndProcessImage = async () => {
    if (cameraRef.current) {
      setLoading(true);
      try {
        const photo = await cameraRef.current.takePictureAsync({
          base64: true,
        });

        setImageUri(photo.uri);
        setImage(photo.uri);
      } catch (error) {
        console.error("Error capturing image:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          {intent && (
            <>
              <View style={{ flex: 1 }} />
              <View>
                <Button
                  title="Capture & Process"
                  onPress={captureAndProcessImage}
                />
                {loading && <ActivityIndicator size="large" color="blue" />}
                {imageUri && (
                  <Image
                    source={{ uri: imageUri }}
                    style={{ width: 200, height: 200, marginTop: 10 }}
                  />
                )}
              </View>
            </>
          )}
        </View>
      </CameraView>
    </View>
  );
};

export default CameraViewComponent;
