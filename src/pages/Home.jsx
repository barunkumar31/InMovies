import React from 'react'
import Main from '../Commponents/Main'
import Row from '../Commponents/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
      <Main/>
      <Row rowID="1"title='Up Coming' url={requests.requestUpcoming}/><Row rowID="1"title='Popular' url={requests.requestPopular}/>
      <Row rowID="2"title='Trending' url={requests.requestTrending}/>
      <Row rowID="3"title='Top Rating' url={requests.requestTopRated}/>
      <Row rowID="4"title='Horror' url={requests.requestHorror}/>
    </div>
  )
}

export default Home
