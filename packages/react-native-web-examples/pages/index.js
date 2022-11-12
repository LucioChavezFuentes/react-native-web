import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function generateRandomText() {
  const comment = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel feugiat eros.
  Aliquam vehicula luctus dui, at commodo massa condimentum in.
  Nunc turpis nulla, finibus id ullamcorper non, efficitur et enim.
  Vestibulum elementum eleifend arcu, sed fringilla eros suscipit non.
  Cras a nisi in libero ultrices maximus. Integer ultricies at urna vel mattis.
  Suspendisse laoreet tortor dolor, in commodo ligula egestas a.
  Sed efficitur vestibulum metus vitae lacinia. Pellentesque quis volutpat ipsum.
  Duis egestas et ante non tristique. Nam ut ullamcorper ante.
  Sed porta, quam sit amet maximus aliquet, sem lacus posuere eros, et pulvinar nisl ante id justo.
  Aliquam placerat molestie lorem ut sollicitudin. Aliquam tincidunt mi leo, ac lacinia magna bibendum in.
  Vestibulum at quam et lacus commodo mattis. Pellentesque interdum aliquam imperdiet.`;
  const commentArray = comment.split(' ');

  let textToAdd = '';

  while (textToAdd.length === 0) {
    const randomStart = Math.floor(Math.random() * commentArray.length);
    const randomEnd = getRandomInt(randomStart + 1, commentArray.length);
    const textToAddArray = commentArray.slice(randomStart, randomEnd);
    textToAdd = textToAddArray.join(' ').trim();
  }

  return textToAdd;
}

const arrayData = [];
for (let i = 0; i < 100; i++) {
  arrayData.push({ body: `${i}---${generateRandomText()}\n`, type: 'text' });
}

class MyItem extends React.Component {
  constructor(props) {
    super(props);

    for (let i = 0; i < 100000000; i++) {}
  }
  render() {
    const { item } = this.props;
    return <Text style={styles.listItemText}>{item.body}</Text>;
  }
}

export default function LongFlatlist() {
  return (
    <View style={styles.flatlistStyle}>
      <FlatList
        data={arrayData}
        maxToRenderPerBatch={1}
        renderItem={({ item }) => {
          return <MyItem item={item} />;
        }}
        windowSize={15}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listItemText: { fontSize: 16, padding: 16 },
  flatlistStyle: { height: '100vh', padding: '100px 200px' }
});
