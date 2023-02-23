import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function scrollViewParent(boxMarkUp) {
  return (
    <View style={styles.grandParentBoxContainer}>
      <ScrollView style={styles.parentBoxContainer}>
        <View style={styles.childScrollView}>
          <Text>Scroll Down to see the yellow box</Text>
        </View>

        {boxMarkUp}

        <View style={styles.childScrollView}>
          <Text>Scroll Up to see the yellow box</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  grandParentBoxContainer: {
    borderColor: 'red',
    padding: 15,
    borderWidth: 20
  },

  parentBoxContainer: {
    borderColor: 'blue',
    padding: 10,
    borderWidth: 20,
    height: 200
  },

  childScrollView: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
