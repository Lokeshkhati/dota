import { useState, useEffect } from "react";

const url = "https://api.opendota.com/api";

type hero = {
  id: number;
  localized_name: string;
  icon: string;
};

type heroList = hero[];

const HerosList = () => {
  const [heros, setHeros] = useState<heroList>([]);

  useEffect(() => {
    try {
      const fetchHeros = async () => {
        const response = await fetch(`${url}/constants/heroes`);
        const data = await response.json();
        setHeros(data);
        console.log(data);
      };
      fetchHeros();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="content">
      <h1>Heroes Go Here</h1>
      <ul className="heroes-list">
        {Object.values(heros)
          .map((hero) => (
            <li key={hero.id}>
              <a href="#">
                <span className="hero__name"> {hero.localized_name} </span>
                <img src={hero.icon} alt={hero.localized_name} />
              </a>
            </li>
          ))
          }
      </ul>
    </div>
  );
};

export default HerosList;
