import React from 'react'
import Header from '../Components/Header'
import Title from '../Components/Title'
import Card from '../Components/Card'


const Home = () => {
  return (
    <>
    <Header/>
    <Title title="Movies(චිත්‍රපට)"/>
    <div className='max-w-7xl mx-auto px-3 grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-3'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    <Title title="TV SHOW"/>
    <div className='max-w-7xl mx-auto px-3 grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </>
  )
}

export default Home