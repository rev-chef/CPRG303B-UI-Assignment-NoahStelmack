import {View, StyleSheet} from 'react-native'

const MistakeOrb = () => {
  return (
    <View style={styles.orb}></View>
  )
}

export default MistakeOrb

const styles = StyleSheet.create({
    orb: {
        width: 15,
        height: 15,
        backgroundColor: "#44403b",
        borderRadius: 50,
        marginHorizontal: 5
    }
});