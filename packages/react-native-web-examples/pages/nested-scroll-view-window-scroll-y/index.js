import { View, Text } from 'react-native';
import MeasureTemplate from '../../shared/measureTemplate';
import Example from '../../shared/example';
import nestedScrollView from '../../shared/nestedScrollView';
import styles from '../../shared/styles';

export default function TestTemplate() {
  return (
    <>
      <Example title="Nested Scroll View Scroll Window Y">
        <View style={styles.windowScrollBlock()}>
          <Text>Scroll Down the window to see the Yellow Box</Text>
        </View>
        <MeasureTemplate renderBoxWrapper={nestedScrollView()} />
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
