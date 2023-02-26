import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  childScrollView: (horizontal, last = false) => ({
    // height: '100%',
    // width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    height: 700,
    width: 700,
    // minHeight: 400,
    // minWidth: 400,
    alignItems: 'center',
    justifyContent: !horizontal ? (last ? 'flex-end' : 'flex-start') : 'center'
  }),

  // lastChildScrollView: {
  //   justifyContent: !horizontal ? 'flex-end' : 'center',
  // },

  firstChildScrollViewText: (horizontal) => ({
    alignSelf: !horizontal ? 'center' : 'start'
  }),

  lastChildScrollViewText: (horizontal) => ({
    alignSelf: !horizontal ? 'center' : 'end'
  }),

  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  grandParentBoxContainer: {
    borderColor: 'red',
    padding: 15,
    borderWidth: 20,
    // width: 400,
    maxWidth: 600,
    // maxHeight: 600,
    maxHeight: '50vh',
    width: '100%',
    height: '100%'
  },

  parentBoxContainer: {
    borderColor: 'blue',
    padding: 10,
    borderWidth: 20,
    // height: 400,
    // width: 400,
    height: '100%',
    width: '100%'
    // maxWidth: '100%',
    // maxHeight: '100%',
  },

  nestedScrollView: {
    borderColor: 'blue',
    padding: 10,
    borderWidth: 20,
    // height: 400,
    // width: 400,
    maxHeight: '100%',
    maxWidth: '100%',
    // height: '100%',
    // width: '100%',
    height: 700,
    width: 700
    // height: '100%',
  },

  windowScrollBlock: (horizontal) => ({
    minHeight: '100vh',
    width: !horizontal ? 'auto' : '100vw',
    alignItems: 'center',
    justifyContent: 'center'
  })
});
