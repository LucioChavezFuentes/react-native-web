import { Text, View, ScrollView } from 'react-native';
import { FirstChildScrollView, LastChildScrollView } from './childsScrollView';
import styles from './styles';

export default function scrollViewParent(
  scrollViewProps = { horizontal: false }
) {
  return function renderMarkUp(boxMarkUp) {
    return (
      <View style={styles.grandParentBoxContainer}>
        <ScrollView style={styles.parentScrollView} {...scrollViewProps}>
          <FirstChildScrollView horizontal={scrollViewProps.horizontal} />

          <View style={styles.childScrollView(scrollViewProps.horizontal)}>
            <Text>
              {!scrollViewProps.horizontal
                ? `Keep Scrolling Down to see the yellow box`
                : `Keep Scrolling Right to see the yellow box`}
            </Text>
          </View>
          {/* <ScrollView style={[styles.nestedScrollView]} contentContainerStyle={styles.childScrollView}> */}
          <ScrollView style={[styles.nestedScrollView]} {...scrollViewProps}>
            <View style={styles.childScrollView(scrollViewProps.horizontal)}>
              <Text>
                {!scrollViewProps.horizontal
                  ? `You reach the child ScrollView, keep Scrolling Down to see the yellow box`
                  : `You reach the child ScrollView, keep Scrolling Right to see the yellow box`}
              </Text>
            </View>

            {boxMarkUp}

            <LastChildScrollView horizontal={scrollViewProps.horizontal} />
          </ScrollView>
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
//     maxWidth: '100%',
//     width: 600,
//   },

//   nestedScrollView: {
//     borderColor: 'blue',
//     padding: 10,
//     borderWidth: 20,
//     height: 400,
//     width: 400,
//     maxHeight: '100%',
//     maxWidth: '100%',
//     // height: '100%',
//   },

//   childScrollView: {
//     // height: '100%',
//     maxHeight: '100%',
//     maxWidth: '100%',
//     height: 400,
//     width: 400,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },

//   parentScrollView: {
//     borderColor: 'orange',
//     padding: 10,
//     borderWidth: 20,
//     height: 400
//   }
// });
