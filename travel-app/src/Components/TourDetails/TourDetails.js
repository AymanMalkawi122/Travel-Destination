import { useParams, useState } from 'react-router-dom';
import './TourDetails.css';
import ReadMore from "../ReadMore/ReadMore"
function GetDataByID(params, data) {
  return data.find(obj => obj.id === params.id);
}

function TourDetails(props) {
  let obj = GetDataByID(useParams(), props.data);
  console.log(obj);
  return (
    <main>
      <h2>{`${obj.name}`}</h2>
      <img alt="location" src={`${obj.image}`} />
      <ReadMore text={obj.info}></ReadMore>
      <p>{`price : ${obj.price}`}</p>
    </main>
  );
}

export default TourDetails;