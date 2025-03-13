import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants";

const useRecognizeText = () => {
  const [loading, setLoading] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");

  const recognizeText = async (imageUri) => {
    if (!imageUri) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", {
        uri: imageUri,
        name: "image.jpg",
        type: "image/jpeg",
      });

      const response = await axios.post(
        `${BASE_URL}/recognize-text`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("response.data.text", response);
      setRecognizedText(response.data.info);
    } catch (error) {
      console.error("Error recognizing text:", error);
      setRecognizedText(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return { recognizeText, loading, recognizedText };
};

export default useRecognizeText;
