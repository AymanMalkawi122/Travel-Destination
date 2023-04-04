import './Home.css';
import Tours from '../Tours/Tours';
function Home(props) {
  return (
    <main>
      <Tours data={props.data} />
    </main>
  );
}

export default Home;