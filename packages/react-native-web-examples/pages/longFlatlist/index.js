import React from 'react';
import { FlatList, StyleSheet, Text, Image } from 'react-native';

const arrayData = [];
for (let i = 0; i < 1000; i++) {
  if (i % 2 === 0) {
    arrayData.push({ item: i, type: 'text' });
  } else {
    arrayData.push({
      item: 'https://uploads.codesandbox.io/uploads/user/6b7f9c8e-d7f1-4c55-b52f-c0c5c187c5f7/DOw--arbol+fuego.jpeg',
      type: 'image'
    });
  }
}

function MyImage({ item }) {
  return (
    <Image
      source={{
        uri: item
      }}
      style={styles.imageStyle}
    />
  );
}

export default function LongFlatlist() {
  return (
    <FlatList
      data={arrayData}
      maxToRenderPerBatch={1}
      renderItem={({ item: { item, type } }) => {
        if (type === 'image') {
          return <MyImage item={item} />;
        } else {
          return <Text style={styles.listItemText}>{item}</Text>;
        }
      }}
      style={styles.flatlistStyle}
      windowSize={15}
    />
  );
}

const styles = StyleSheet.create({
  listItemText: { fontSize: 16 },
  imageStyle: { width: 200, height: 200 },
  flatlistStyle: { height: '100vh', paddingLeft: 250 }
});
