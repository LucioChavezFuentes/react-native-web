import React from 'react';
// import { FlatList, StyleSheet, Text, Image, View, useWindowDimensions, Dimensions } from 'react-native';
import { FlatList, StyleSheet, Text, Image, View } from 'react-native';
import Example from '../../shared/example';

// import dynamic from 'next/dynamic'

// const DynamicHeader = dynamic(() => import('../components/header'), {
//   ssr: false,
// })

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
for (let i = 0; i < 500; i++) {
  arrayData.push({ body: `${i}---${generateRandomText()}`, type: 'text' });
}

for (let i = 0; i < 500; i++) {
  arrayData.push({
    body: 'https://uploads.codesandbox.io/uploads/user/6b7f9c8e-d7f1-4c55-b52f-c0c5c187c5f7/DOw--arbol+fuego.jpeg',
    type: 'image',
    size: { height: getRandomInt(200, 600), width: getRandomInt(200, 600) }
  });
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
  // constructor(props) {
  //   super(props);
  //   // Let's make items exppensive to render
  //   // for (let i = 0; i < 200000000; i++) {}
  // }

  render() {
    const { item, style } = this.props;
    return (
      <View style={style}>
        {item.type === 'text' ? (
          <MyText item={item} />
        ) : (
          <MyImage item={item} />
        )}
      </View>
    );
  }
}

export default function LongFlatlist() {
  // if (typeof window === 'undefined') {
  //   return <></>;
  // }

  // const { height } = useWindowDimensions();

  // let flatlistHeight = {
  //   height: height * 0.9
  // };

  return (
    <Example title="Horizontal Inverted Flatlist with New Implementation Measure">
      <View style={[styles.pageContainer]}>
        <View style={[styles.flatlist]}>
          <View style={styles.textContainer}>
            <Text>
              This is an Horizontal Inverted Flatlist with{' '}
              <View style={styles.boldText}> New Implementation.</View> Lets put
              borders to items and containers!
            </Text>
            <Text>
              <Text style={styles.boldText}>Check the console</Text> to see the
              diffrent offsets returned by Current Implmentation and New
              Implementation.
            </Text>
          </View>

          <FlatList
            // style={{ borderWidth: '19px', borderColor: 'orange', padding: '30px', overflowY: 'scroll', direction: 'rtl'}}
            contentContainerStyle={[
              styles.containerBorder,
              styles.containerPadding
            ]}
            data={arrayData}
            horizontal
            inverted
            maxToRenderPerBatch={1}
            renderItem={({ item }) => {
              return (
                <MyItem
                  item={item}
                  style={[styles.itemPadding, styles.itemStyleBorder]}
                />
              );
            }}
            style={styles.flatlistBorder}
            windowSize={15}
          />
        </View>
      </View>
    </Example>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    minHeight: '100%'
  },

  textContainer: {
    rowGap: '10px'
  },

  boldText: {
    fontWeight: 'bold'
  },

  flatlist: {
    padding: '10%',
    // maxWidth: '400px',
    width: '100vw',
    height: '100vh',
    rowGap: '10px'
  },
  // flatlist: (height) => {

  //   return ({
  //     padding: '10%',
  //     maxWidth: '400px',
  //     height,
  //   })
  // },

  flatlistPadding: {
    padding: '10%'
  },

  flatlistMaxWidth: {
    maxWidth: '400px'
  },

  // flatlistHeight: {
  //   height: Dimensions.get('screen').height
  // },

  flatlistBorder: {
    borderWidth: '19px',
    borderColor: 'red'
  },

  containerBorder: {
    borderWidth: '19px',
    borderColor: 'black'
  },

  containerPadding: {
    padding: '30px'
  },

  itemPadding: {
    padding: 16
  },

  itemStyleBorder: {
    borderWidth: '13px',
    borderColor: 'blue'
  },

  textStyle: { fontSize: 16 }
  // flatlistStyle: { height: '100vh', padding: '10%', borderWidth: '19px', borderColor: 'red', transform: [{scale: 2}], },
  // firstBlock: { height: '100vh', padding: '10%', border: '13px',}
});
