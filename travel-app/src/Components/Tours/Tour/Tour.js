import './Tour.css'
function Tour(props) {
  let data = props.data;
  return (
    data.map((obj) => {
      let absoluteAddress="./city/";
      absoluteAddress=absoluteAddress.concat(obj.id);
      return (
        <a href={absoluteAddress}>
        <div className="location">
          <h2>{`${obj.name}`}</h2>
          <img alt="location" src={`${obj.image}`} />
        </div>
        </a>
      );
    })
  );
}

export default Tour;