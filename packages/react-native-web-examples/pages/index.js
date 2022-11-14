import React from 'react';
import { FlatList, StyleSheet, Text, Image, View } from 'react-native';

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
  arrayData.push({ body: `${i}---${generateRandomText()}`, type: 'text' });
}

for (let i = 0; i < 100; i++) {
  arrayData.push({ body: `${i}--- Short Item Text`, type: 'text' });
}

for (let i = 0; i < 100; i++) {
  arrayData.push({
    body: 'https://uploads.codesandbox.io/uploads/user/6b7f9c8e-d7f1-4c55-b52f-c0c5c187c5f7/DOw--arbol+fuego.jpeg',
    type: 'image',
    size: { height: getRandomInt(200, 600), width: getRandomInt(200, 600) }
  });
}

for (let i = 0; i < 100; i++) {
  arrayData.push({ body: `${i}--- Short Item Text`, type: 'text' });
}

for (let i = 0; i < 100; i++) {
  arrayData.push({
    body: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    type: 'image',
    size: { height: getRandomInt(200, 600), width: getRandomInt(200, 600) }
  });
}

for (let i = 0; i < 100; i++) {
  arrayData.push({ body: `${i}---${generateRandomText()}`, type: 'text' });
}

function MyImage({ item }) {
  return (
    <Image
      source={{
        uri: item.body
      }}
      style={{ height: item.size.height, width: item.size.width }}
    />
  );
}

class MyText extends React.Component {
  render() {
    const { item, style } = this.props;
    return <Text style={style}>{item.body}</Text>;
  }
}
class MyItem extends React.Component {
  constructor(props) {
    super(props);

    for (let i = 0; i < 100000000; i++) {}
  }

  render() {
    const { item } = this.props;
    return (
      <View style={styles.itemStyle}>
        {item.type === 'text' ? (
          <MyText item={item} style={styles.listItemText} />
        ) : (
          <MyImage item={item} />
        )}
      </View>
    );
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
  textStyle: { fontSize: 16 },
  imageStyle: { width: 200, height: 200 },
  itemStyle: { padding: 16 },
  flatlistStyle: { height: '100vh', padding: '100px 200px' }
});
