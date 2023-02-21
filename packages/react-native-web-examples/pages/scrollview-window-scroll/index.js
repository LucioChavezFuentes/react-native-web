import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MeasureTemplate from '../../shared/measureTemplate';
import Example from '../../shared/example';

function renderBoxWrapper(boxMarkUp) {
  return (
    <View style={styles.grandParentBoxContainer}>
      <ScrollView style={styles.parentBoxContainer}>
        <View style={styles.childScrollView}>
          <Text>Scroll Down to see the yellow box</Text>
        </View>

        {boxMarkUp}

        <View style={styles.childScrollView}>
          <Text>Scroll Up to see the yellow box</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default function TestTemplate() {
  return (
    <>
      <Example rootStyle={styles.root} title="Simple View Scroll Window">
        <View style={styles.windowsContainer}>
          <View style={styles.windowScrollBlock}>
            <Text>
              Scroll Down and Scroll Right the window to se the Yellow Box
            </Text>
          </View>
          <View style={styles.windowScrollBlock}>
            <Text>Scroll Down the window to se the Yellow Box</Text>
          </View>
          <View style={styles.windowScrollBlock}>
            <Text>Scroll Right the window to se the Yellow Box</Text>
          </View>
          <View style={styles.windowScrollBlock}>
            <MeasureTemplate renderBoxWrapper={renderBoxWrapper} />
          </View>
        </View>
      </Example>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    minHeight: '200vh',
    minWidth: '200vw'
  },

  windowsContainer: {
    width: '200vw',
    minHeight: '200vh',
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderColor: 'black',
    padding: 15,
    borderWidth: 20
  },
  windowScrollBlock: {
    height: '100vh',
    width: '90vw',
    // flexGrow: 1,
    // flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

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

  childScrollView: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
