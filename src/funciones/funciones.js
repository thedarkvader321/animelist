import axios from "axios";

const allAnimes = async(state) =>{
    const peticion = await axios.get('https://api.jikan.moe/v4/anime?q=gundam&sfw')
    state(peticion.data.data); 
    console.log(peticion.data.data);
   
}

const anime = async(id, state)=> {
    const peticion = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    state(peticion.data);
    console.log(peticion.data.data);
    
}


export{
    allAnimes,
    anime
};