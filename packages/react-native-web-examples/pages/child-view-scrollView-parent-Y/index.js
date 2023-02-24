import MeasureTemplate from '../../shared/measureTemplate';
import Example from '../../shared/example';
import scrollViewParent from '../../shared/scrollViewParent';

export default function ChildViewScrollViewParent() {
  return (
    <>
      <Example title="Child View with ScrollView Parent">
        <MeasureTemplate renderBoxWrapper={scrollViewParent()} />
      </Example>
    </>
  );

  // return <MeasureTemplate title='Child View with ScrollView Parent' renderBoxWrapper={renderBoxWrapper}/>
}
