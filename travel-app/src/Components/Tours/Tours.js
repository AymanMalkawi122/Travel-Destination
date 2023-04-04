import './Tours.css';
import Tour from './Tour/Tour'
function Tours(props) {
  let data =props.data;
  return (
      <Tour data={data}/>
  );
}

export default Tours;