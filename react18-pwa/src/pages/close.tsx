import { useLocation } from 'react-router-dom';

function Close() {
  const { state } = useLocation();
  console.log(state);

  return <>종료</>;
}
export default Close;
