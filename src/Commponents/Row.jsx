
import axios from 'axios';
import React, { useEffect, useState }  from 'react';
import Movie from './Movie';
import {MdChevronLeft ,MdChevronRight} from 'react-icons/md'

const Row = ({title,url,rowID}) => {
  const [movies,setMovies]=useState([])
  

   useEffect(()=>{
    axios.get(url).then((response)=>{
        setMovies(response.data.results)
    })
   },[url])

   const sliderLeft=()=>{
    var slider=document.getElementById('slider'+rowID);
    slider.scrollLeft = slider.scrollLeft-500;
   }
   
   const sliderRight=()=>{
    var slider=document.getElementById('slider'+rowID)
    slider.scrollLeft = slider.scrollLeft + 500;
   }
   
   console.log(movies)
  return (
    <>
      <h2 className='text-white  font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft 
        onClick={sliderLeft} size={40} className='bg-white text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
        <div id={'slider'+rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap left-0 scroll-smooth scrollbar-hide relative '>
        {movies.map((item,id)=>{
          return <Movie item={item} key={id}/>  
        })}
        </div>
        <MdChevronRight onClick={sliderRight} size={40} className='bg-white text-black rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden right-0 group-hover:block'/>
        </div>
    </>
  )
}

export default Row
