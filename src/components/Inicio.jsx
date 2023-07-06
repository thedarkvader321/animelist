import React, { useEffect, useState } from 'react';
import { allAnimes } from '../funciones/funciones';


export const Inicio = () => {
  const [animes, setAnimes] = useState(null);

  useEffect(() => {
    allAnimes(setAnimes);
  }, []);

  return (
    <div className="row">
      {animes != null ? (
        animes.map((anime) => (
          <div class="columns" style={{ width: "100%" }}>
            <div class="column">
              <a href={`/anime/${anime.mal_id}`}>{anime.title}</a>
              <img src={anime.images.jpg.image_url} alt="" />
            </div>
          </div>

        ))
      ) : (
        <div className="col">error</div>
      )}
    </div>
  );
};

