import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { anime } from '../funciones/funciones'



export const Anime = () => {
  const [serie, setSerie] = useState(null);
  const params = useParams();

  useEffect(() => {
    anime(params.id, setSerie);
    console.log(serie)
  }, [])
  return (
    <>
      {serie != null ? (
        <div className="series-details">
          <h1>{serie.data.title_english}</h1>
          <img src={serie.data.images.jpg.image_url} alt="" />
          <section>
            <h1>Informacion</h1>
            <h2>Numero de episodios: {serie.data.episodes}</h2>
            <h2>Puntacion: {serie.data.score}</h2>
            <h2>Rating: {serie.data.rating}</h2>
            <h2>Studio: Sunrise</h2>
            <p>Synopsis: {serie.data.synopsis}</p>
          </section>
        </div>

      ) : ('no hay personaje')}

    </>

  )
}
