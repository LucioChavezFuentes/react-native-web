import { StyleSheet, View } from 'react-native';
import MeasureTemplate from '../../shared/measureTemplate';
import Example from '../../shared/example';

export default function ChildViewParentsBorders() {
  function renderBoxWrapper(boxMarkUp) {
    return (
      <View style={styles.grandParentBoxContainer}>
        <View style={styles.parentBoxContainer}>{boxMarkUp}</View>
      </View>
    );
  }

  return (
    <>
      <Example title="Child View with Parents with Borders">
        <MeasureTemplate renderBoxWrapper={renderBoxWrapper} />
      </Example>
    </>
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
    borderWidth: 20
  }
});
