import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

const Character = async () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=54DxCmzUpgZgPz1e"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [page]);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <Header />
      {data.character.map((results) => {
        return (
          <div key={results.comics} className="character">
            <Link to={`/character/${results.comics}`}>
              <img
                style={{ height: 40, width: 40, borderRadius: 20 }}
                src={results.thumbnail}
                alt=""
              />
              <h2>{results.name}</h2>
              <div>{results._id}</div>
            </Link>
          </div>
        );
      })}
      <button onClick={() => setPage(page - 1)}>Page précédente</button>
      <button onClick={() => setPage(page + 1)}>Page suivante</button>
    </div>
  );
};

export default Character;
