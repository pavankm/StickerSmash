import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ imageSource }) {
  return <Image style={styles.image} source={imageSource} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 480,
    borderRadius: 18,
  },
});
