import { Text, View } from 'react-native';
import styles from './styles';

export function FirstChildScrollView({ horizontal }) {
  return (
    <View style={styles.childScrollView(horizontal)}>
      <Text style={styles.firstChildScrollViewText(horizontal)}>
        {' '}
        {!horizontal
          ? `Scroll Down to see the yellow box`
          : `Scroll Right to see the yellow box`}{' '}
      </Text>
    </View>
  );
}

export function LastChildScrollView({ horizontal }) {
  const last = true;
  return (
    <View style={styles.childScrollView(horizontal, last)}>
      <Text style={styles.lastChildScrollViewText(horizontal)}>
        {' '}
        {!horizontal
          ? `Scroll Up to see the yellow box`
          : `Scroll Left to see the yellow box`}{' '}
      </Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   childScrollView: {
//     // height: '100%',
//     // width: '100%',
//     maxWidth: '100%',
//     maxHeight: '100%',
//     height: 400,
//     width: 400,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });
