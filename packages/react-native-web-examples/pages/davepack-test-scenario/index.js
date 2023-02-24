import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class DavePackTestScenario extends React.Component {
  state = {
    top: 0,
    left: 0
  };

  square = [];

  onSquarePress = (index) => () => {
    this.square[index].measureInWindow(
      (left, top, leftNoTransform, topNoTransform) => {
        console.log(
          'leftNoTranasform',
          leftNoTransform,
          'topNoTransform',
          topNoTransform
        );
        console.log('left', left, 'top', top);
        this.setState({ top: topNoTransform, left: leftNoTransform });
      }
    );
  };

  render() {
    const { top, left } = this.state;

    return (
      <View>
        <View style={[styles.square, { top, left }]} />
        <ScrollView style={styles.outer}>
          <View style={styles.content}>
            <Text>1</Text>
            <View>
              <TouchableOpacity
                onPress={this.onSquarePress(0)}
                style={{ marginVertical: 10 }}
              >
                <Text>come here square</Text>
              </TouchableOpacity>
            </View>
            <View ref={(c) => (this.square[0] = c)} style={styles.comeSquare} />
          </View>
          <View style={styles.content}>
            <Text>2</Text>
            <View>
              <TouchableOpacity
                onPress={this.onSquarePress(1)}
                style={{ marginVertical: 10 }}
              >
                <Text>come here square</Text>
              </TouchableOpacity>
            </View>
            <View ref={(c) => (this.square[1] = c)} style={styles.comeSquare} />
          </View>
          <ScrollView style={styles.inner}>
            <View style={styles.content}>
              <Text>3</Text>
              <View>
                <TouchableOpacity
                  onPress={this.onSquarePress(2)}
                  style={{ marginVertical: 10 }}
                >
                  <Text>come here square</Text>
                </TouchableOpacity>
              </View>
              <View
                ref={(c) => (this.square[2] = c)}
                style={styles.comeSquare}
              />
            </View>
            <View style={styles.content}>
              <Text>4</Text>
              <View>
                <TouchableOpacity
                  onPress={this.onSquarePress(3)}
                  style={{ marginVertical: 10 }}
                >
                  <Text>come here square</Text>
                </TouchableOpacity>
              </View>
              <View
                ref={(c) => (this.square[3] = c)}
                style={styles.comeSquare}
              />
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outer: {
    borderWidth: 1,
    borderColor: 'lightblue',
    padding: 20
  },
  content: {
    height: 500,
    borderWidth: 2,
    borderColor: 'pink',
    margin: 20,
    padding: 20
  },
  inner: {
    height: 500,
    borderWidth: 1,
    borderColor: 'purple'
  },
  comeSquare: {
    height: 50,
    width: 50,
    backgroundColor: 'pink'
  },
  square: {
    backgroundColor: 'steelblue',
    position: 'fixed',
    height: 50,
    width: 50,
    padding: 20,
    zIndex: 99999
  }
});
