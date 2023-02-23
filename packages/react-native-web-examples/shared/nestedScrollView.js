import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function scrollViewParent(boxMarkUp) {
  return (
    <View style={styles.grandParentBoxContainer}>
      <ScrollView style={styles.parentScrollView}>
        <View style={styles.childScrollView}>
          <Text>Scroll Down to see the yellow box</Text>
        </View>

        <View style={styles.childScrollView}>
          <Text>Keep Scrolling Down to see the yellow box</Text>
        </View>
        {/* <ScrollView style={[styles.nestedScrollView]} contentContainerStyle={styles.childScrollView}> */}
        <ScrollView style={[styles.nestedScrollView]}>
          <View style={styles.childScrollView}>
            <Text>
              {' '}
              You reach the child ScrollView, keep Scrolling Down to see the
              yellow box
            </Text>
          </View>

          {boxMarkUp}

          <View style={styles.childScrollView}>
            <Text>Scroll Up to see the yellow box</Text>
          </View>
        </ScrollView>
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

  nestedScrollView: {
    borderColor: 'blue',
    padding: 10,
    borderWidth: 20,
    height: 400
    // height: '100%',
  },

  childScrollView: {
    // height: '100%',
    height: 400,
    alignItems: 'center',
    justifyContent: 'center'
  },

  parentScrollView: {
    borderColor: 'orange',
    padding: 10,
    borderWidth: 20,
    height: 400
  }
});
