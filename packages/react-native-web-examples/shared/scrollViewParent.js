import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function scrollViewParent(
  scrollViewProps = { horizontal: false }
) {
  return function renderMarkUp(boxMarkUp) {
    return (
      <View style={styles.grandParentBoxContainer}>
        <ScrollView style={styles.parentBoxContainer} {...scrollViewProps}>
          <View style={styles.childScrollView}>
            <Text>
              {' '}
              {!scrollViewProps.horizontal
                ? `Scroll Down to see the yellow box`
                : `Scroll Right to see the yellow box`}{' '}
            </Text>
          </View>

          {boxMarkUp}

          <View style={styles.childScrollView}>
            <Text>
              {' '}
              {!scrollViewProps.horizontal
                ? `Scroll Up to see the yellow box`
                : `Scroll Left to see the yellow box`}{' '}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  };
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

  // childScrollView: function (horizontal) {

  //   return {
  //     height: '100%',
  //     alignItems: 'center',
  //     justifyContent: 'center'
  //   }
  // }
  childScrollView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
