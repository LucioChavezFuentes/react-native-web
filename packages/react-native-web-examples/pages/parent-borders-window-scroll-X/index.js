import { View, Text } from 'react-native';
import MeasureTemplate from '../../shared/measureTemplate';
import Example from '../../shared/example';
import styles from '../../shared/styles';
import { scrollRightMessage } from '../../shared/constants';

export default function ParentsBordersWindowScrollX() {
  function renderBoxWrapper(boxMarkUp) {
    return (
      <View style={styles.grandParentBoxContainer}>
        <View style={styles.parentBoxContainer}>{boxMarkUp}</View>
      </View>
    );
  }

  return (
    <>
      <Example
        horizontal
        title="View in Parents with Borders in Window Scroll X"
      >
        <View style={styles.windowScrollBlock({ horizontal: true })}>
          <Text>{scrollRightMessage}</Text>
        </View>
        <MeasureTemplate
          renderBoxWrapper={renderBoxWrapper}
          style={{ alignSelf: 'flex-start' }}
        />
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
