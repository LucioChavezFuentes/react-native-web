import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function defaultBoxWrapper(boxMarkUp) {
  return <>{boxMarkUp}</>;
}

// function DefaultBoxWrapper({children}) {
//   return (
//     <>
//       {children}
//     </>
//   )
// }

// export default function MeasureTemplate({BoxWrapper = DefaultBoxWrapper}) {
export default function MeasureTemplate({
  renderBoxWrapper = defaultBoxWrapper
}) {
  const [measureLayoutStyle, setMeasureLayoutStyle] = React.useState({
    x: '',
    y: '',
    pageX: '',
    pageY: ''
  });

  const boxRef = React.useRef(null);

  const onPressMeasure = () => {
    boxRef.current.measure((x, y, width, height, pageX, pageY) => {
      setMeasureLayoutStyle({
        x,
        y,
        width,
        height,
        pageX,
        pageY
      });
    });
  };

  return (
    <>
      <View style={styles.pageContainer}>
        <View style={styles.layoutContainer}>
          {/* <BoxWrapper>
            <View style={[styles.boxContainer]} ref={boxRef} >
              <View style={[styles.layoutBox]} />
            </View>
          </BoxWrapper> */}
          {renderBoxWrapper(
            // <View style={[styles.boxContainer]}>
            <View ref={boxRef} style={[styles.layoutBox]} />
            // </View>
          )}
        </View>

        <View style={styles.measureContainer}>
          <View style={styles.selfCenter}>
            <Button
              accessibilityLabel="Measure purple button"
              color="#841584"
              onPress={onPressMeasure}
              title="Measure yellow square"
            />
          </View>

          <View style={[styles.layoutInfoContainer]}>
            <View style={[styles.layoutInfoBlock]}>
              <Text accessibilityRole="heading" style={styles.heading}>
                Measure with Current Implementation (getBoundingClientRect)
              </Text>
              <Text style={styles.layoutInfo}>
                {JSON.stringify(measureLayoutStyle, null, 2)}
              </Text>
            </View>

            <View style={[styles.layoutInfoBlock]}>
              <Text accessibilityRole="heading" style={styles.heading}>
                Measure with New Implementation
              </Text>
              <Text style={styles.layoutInfo}>
                {JSON.stringify(measureLayoutStyle, null, 2)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    width: '100%',
    minHeight: '100%'
  },
  layoutContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 1,
    flexGrow: 1
  },
  layoutBox: {
    backgroundColor: '#FFAD1F',
    height: '100px',
    width: '100px',
    alignSelf: 'center'
  },
  layoutInfoContainer: {
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: '10px'
  },

  layoutInfoBlock: {
    flexShrink: 1,
    flexGrow: 1,
    maxWidth: '300px'
  },

  heading: {
    fontWeight: 'bold',
    marginVertical: '1rem',
    flexShrink: 1,
    flexGrow: 1
  },

  boxContainer: {
    width: '100%',
    maxHeight: '400px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    backgroundColor: '#ececec',
    padding: 30,
    marginVertical: 5,
    userSelect: 'none',
    width: '100px',
    height: '100px'
  },
  content: {
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    userSelect: 'none'
  },
  orange: {
    backgroundColor: 'orange'
  },
  purple: {
    backgroundColor: 'purple'
  },
  measureContainer: {
    padding: 10,
    flexShrink: 1,
    flexGrow: 1
  },
  selfCenter: {
    alignSelf: 'center'
  }
});
