import './Tours.css';

function Tours() {
  let data = {};
  data = require('../../data/db.json');

  return (
    <main>
      {
        data.map((obj) => {
          return (
            <div className="location">
              <p>{`name : ${obj.name}`}</p>
              <img alt="location" src={`${obj.image}`}/>
            </div>
          );
        })
      }
    </main>
  );
}

export default Tours;