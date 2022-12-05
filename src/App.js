import './App.css';
import Header from './Components/Header';
import Options from './Components/Options';
import Projects from './Pages/Projects';
import Skill from './Pages/Skill';
import Pagination from './Components/Pagination';
import { Routes, Route } from 'react-router-dom';
import goTrip from './assets/img/works/gotrip.jpg'
import { useState } from 'react'
import React from 'react';

function App() {
  const [dark, setDark] = useState(false);
  const [projects, setProjects] = React.useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [worksPerPage, setWorksPerPage] = useState();
  const [loading, setLoading] = useState(true);
  React.useEffect(() =>{
    setLoading(true);
    fetch('https://6320334e9f82827dcf271256.mockapi.io/portfolio').then((res) => res.json()).then((json) => {
      setProjects(json);
    }).catch(() =>{
      console.warn();
      alert('не получилось получить данные')
    })
        .finally(() => {
          setLoading(false);
        });
     // document.body.classList.toggle( 'bg-dark');

  },[dark])
  console.log("dark",dark)

  let nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  let previousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  // current work
  const indexOfLastWork = currentPage * worksPerPage;
  const indexOfFirstWork = indexOfLastWork - worksPerPage;
  const currentWork = projects.slice(indexOfFirstWork, indexOfLastWork);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [show, setShow] = React.useState(false);
  return (
      <div className={dark === true ? 'dark-theme' : 'main_wrapper'}>
        <div className="toggle_theme">
          <button className='toggle_wrapper' onClick={() => setDark(!dark)}>
            {/* {
              dark === true ? <i className="ri-moon-line change-theme ri-sun-line" id="theme-button"></i> : <i className="ri-moon-line change-theme" id="theme-button"></i>
            } */}
          </button>
        </div>
        <Header dark={dark} />

        <main className="main">

          <section className="filters container">
            <Options dark={dark} />
            <div className="filters__sections">
              <Routes>
                <Route path='/webPort' element={<Projects
                    worksPerPage={worksPerPage}
                    setShow={setShow}
                    props={currentWork}
                    show={show}
                    loading={loading}
                    projects={projects}
                    paginate={paginate}
                    currentPage={currentPage}
                    nextPage={nextPage}
                    previousPage={previousPage}
                    dark={dark}
                    indexOfLastWork={indexOfLastWork}
                />} />
                <Route path='/skills' element={<Skill dark={dark} />} />
              </Routes>

            </div>
          </section>
        </main>

        <footer className="footer container">
        <span className="footer__copy">
          &#169; DirksenArt. All rigths reserved
        </span>
        </footer>

      </div>
  );
}

export default App;
