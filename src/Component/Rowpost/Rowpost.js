import React,{useEffect,useState} from "react";

import Youtube from 'react-youtube'
import {imageUrl,API_KEY} from '../constant/const'
import './Rowpost.css';
import axios from '../axios'
export default function Rowpost(props) {
    const[movie,setMovie]=useState([])
    const[urlId,setUrlId]=useState('')
    useEffect(()=>{
    axios.get(props.url).then((resp)=>{
        console.log(resp.data);
        setMovie(resp.data.results)
    }).catch(err=>{
        
    })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },}
  const handleMovie=(id)=>{
    console.log(id);
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((resp)=>{
       if(resp.data.results.length!==0){
        setUrlId(resp.data.results[0])
       }else{
        console.log('array empty');
       }
        
    })

  }
  return (

    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">

        {movie.map((obj)=>
       <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallposter':"poster"} src={`${imageUrl+obj.backdrop_path}`} alt="poster"></img>
     
        )}
               
      </div>
     {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  );
}
