import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
   const posts = [
    {
      title: 'Aprendiendo ReactJS',
      content: 'Una de las tecnologías con mayor demanda en el mercado',
    },
    {
      title: 'Aprendiendo Angular',
      content: 'Una de las tecnologías con mayor demanda en el mercado',
    },
    {
      title: 'Aprendiendo VueJS',
      content: 'Una de las tecnologías con mayor demanda en el mercado',
    },
    {
      title: 'Aprendiendo NextJS',
      content: 'Una de las tecnologías con mayor demanda en el mercado',
    },
    {
      title: 'Aprendiendo NestJS',
      content: 'Una de las tecnologías con mayor demanda en el mercado',
    },
    {
      title: 'Aprendiendo Spring Boot',
      content: 'Una de las tecnologías con mayor demanda en el mercado',
    },
  ];
  
  return <div className={ darkMode ? 'wrapper-dark' : 'wrapper-light'}>

    <div  >
    <header className="container">
      <div className="welcome">
        <h1>Hola, soy Carla</h1>
        <p>Bienvenidos a mi blog!</p>
      </div>
      <button type="button" 
      onClick={()=>setDarkMode(!darkMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>

    <div className="hero">
      <h2>Lo mejor de la tecnologia</h2>
      <button className="btn"
        className={ darkMode ? 'wrapper-dark' : 'wrapper-light'}
      >LO ENCONTRÁS ACÁ</button>
    </div>

    <section className="container" className='posts'>
      {posts.map((post, index) => (
            <div key={index} className='post-card'>
              <p className='post-title'>{post.title}</p>
              <p className='post-content'>{post.content}</p>
            </div>
          ))}
    </section>

    <footer className="container">
      <p>Hola, soy Carla | Todos los derechos reservados</p>
    </footer>
    </div>;
  </div>;
}

export default App;
