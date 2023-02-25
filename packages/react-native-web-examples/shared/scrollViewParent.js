import { View, ScrollView } from 'react-native';
import { FirstChildScrollView, LastChildScrollView } from './childsScrollView';
import styles from './styles';

export default function scrollViewParent(
  scrollViewProps = {
    horizontal: false,
    contentContainerStyle: styles.contentContainerStyle
  }
) {
  return function renderMarkUp(boxMarkUp) {
    return (
      <View style={styles.grandParentBoxContainer}>
        <ScrollView style={styles.parentBoxContainer} {...scrollViewProps}>
          <FirstChildScrollView horizontal={scrollViewProps.horizontal} />

          {boxMarkUp}

          <LastChildScrollView horizontal={scrollViewProps.horizontal} />
        </ScrollView>
      </View>
    );
  };
}

// const styles = StyleSheet.create({
//   grandParentBoxContainer: {
//     borderColor: 'red',
//     padding: 15,
//     borderWidth: 20,
//     // width: 400,
//     maxWidth: '100%',
//   },

//   parentBoxContainer: {
//     borderColor: 'blue',
//     padding: 10,
//     borderWidth: 20,
//     height: 400,
//     width: 400,
//   },

//   // childScrollView: function (horizontal) {

//   //   return {
//   //     height: '100%',
//   //     alignItems: 'center',
//   //     justifyContent: 'center'
//   //   }
//   // }
//   childScrollView: {
//     height: '100%',
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });
