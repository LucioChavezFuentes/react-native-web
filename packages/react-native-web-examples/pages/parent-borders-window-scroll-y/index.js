import { View, Text } from 'react-native';
import MeasureTemplate from '../../shared/measureTemplate';
import Example from '../../shared/example';
import styles from '../../shared/styles';

export default function TestTemplate() {
  function renderBoxWrapper(boxMarkUp) {
    return (
      <View style={styles.grandParentBoxContainer}>
        <View style={styles.parentBoxContainer}>{boxMarkUp}</View>
      </View>
    );
  }

  return (
    <>
      <Example title="View in Parents with Borders in Window Scroll Y">
        <View style={styles.windowScrollBlock()}>
          <Text>Scroll Down the window to se the Yellow Box</Text>
        </View>
        <MeasureTemplate renderBoxWrapper={renderBoxWrapper} />
      </Example>
    </>
  );
}

// const styles = StyleSheet.create({
//   windowScrollBlock: {
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },

//   grandParentBoxContainer: {
//     borderColor: 'red',
//     padding: 15,
//     borderWidth: 20
//   },

//   parentBoxContainer: {
//     borderColor: 'blue',
//     padding: 10,
//     borderWidth: 20
//   }
// });