import DuckCard from "./DuckCard";
import data from "../data";
import "./styles/DuckList.css";

function DuckList() {
  let { ducks } = data;
  return (
    <div className="duck-list">
      {ducks.map((duck) => {
        return <DuckCard duck={duck} key={duck.id} />;
      })}
    </div>
  );
}

export default DuckList;
