import { View, Text } from 'react-native';
import MeasureTemplate from '../../shared/measureTemplate';
import Example from '../../shared/example';
import nestedScrollView from '../../shared/nestedScrollView';
import styles from '../../shared/styles';

export default function NestedScrollViewWindowScrollX() {
  const horizontal = true;
  return (
    <>
      <Example horizontal title="Nested Scroll View Window Scroll X">
        <View style={styles.windowScrollBlock(horizontal)}>
          <Text>Scroll Down the window to se the Yellow Box</Text>
        </View>
        <MeasureTemplate
          renderBoxWrapper={nestedScrollView({ horizontal: true })}
          style={{ alignSelf: 'flex-start' }}
        />
      </Example>
    </>
  );
}

// const styles = StyleSheet.create({

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
