import './App.css'
import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  	return (
		<>
			<Header/>
			<Home/>
			<About/>
			<Projects/>
			<Contact/>
			<Footer/>
		</>
  	)
}

export default App
