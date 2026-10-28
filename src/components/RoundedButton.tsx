import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  text: string;
};

const RoundedButton = ({ text }: Props) => {
  return (
    <Pressable>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default RoundedButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 100,
    padding: 15,
    marginHorizontal: 5,
  },

  text: {
    fontSize: 18,
    fontWeight: 500,
  },
});
