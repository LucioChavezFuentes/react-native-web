import MeasureTemplate from '../../shared/measureTemplate';
import Example from '../../shared/example';
import nestedScrollView from '../../shared/nestedScrollView';

export default function ChildViewScrollViewParent() {
  return (
    <>
      <Example title="Nested ScrollView Y">
        <MeasureTemplate renderBoxWrapper={nestedScrollView()} />
      </Example>
    </>
  );
}