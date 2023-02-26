import { View, Text } from 'react-native';
import MeasureTemplate from '../../shared/measureTemplate';
import Example from '../../shared/example';
import scrollViewParent from '../../shared/scrollViewParent';
import styles from '../../shared/styles';

// function renderBoxWrapper(boxMarkUp) {
//   return (
//     <View style={styles.grandParentBoxContainer}>
//       <ScrollView style={styles.parentBoxContainer}>
//         <View style={styles.childScrollView}>
//           <Text>Scroll Down to see the yellow box</Text>
//         </View>

//         {boxMarkUp}

//         <View style={styles.childScrollView}>
//           <Text>Scroll Up to see the yellow box</Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

export default function TestTemplate() {
  return (
    <>
      <Example title="Scroll View in Window Scroll Y">
        <View style={styles.windowScrollBlock()}>
          <Text>Scroll Down the window to se the Yellow Box</Text>
        </View>
        <MeasureTemplate renderBoxWrapper={scrollViewParent()} />
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
//     borderWidth: 20,
//     height: 200
//   },

//   childScrollView: {
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });
