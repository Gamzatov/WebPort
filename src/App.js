import './App.css';
import Header from './Components/Header';
import Options from './Components/Options';
import Projects from './Pages/Projects';
import Skill from './Pages/Skill';
import Pagination from './Components/Pagination';
import { Routes, Route } from 'react-router-dom';
import goTrip from './assets/img/works/gotrip.jpg'
import { useState } from 'react'

function App() {
  let projects = [
    {
      id: 1,
      link: 'https://gamzatov.github.io/GoTrip/',
      img: 'https://testtovich.000webhostapp.com/works/gotrip.jpg',
      title: 'GoTrip Template'
    },
    {
      id: 2,
      link: 'https://gamzatov.github.io/ventylaciya/',
      img: 'https://testtovich.000webhostapp.com/works/vent.jpg',
      title: 'Expert Project'
    },
    {
      id: 3,
      link: 'https://gamzatov.github.io/Phenomenon/',
      img: 'https://testtovich.000webhostapp.com/works/penomenon.jpg',
      title: 'Phenomenon'
    },
    {
      id: 4,
      link: 'https://gamzatov.github.io/localgram/',
      img: 'https://testtovich.000webhostapp.com/works/local.jpg',
      title: 'React(axios) exercises'
    },
    {
      id: 5,
      link: 'https://gamzatov.github.io/coalicy/',
      img: 'https://testtovich.000webhostapp.com/works/coalicy.jpg',
      title: 'Charity landing page'
    },
    {
      id: 6,
      link: 'https://gamzatov.github.io/a1-technology/',
      img: 'https://testtovich.000webhostapp.com/works/a1.jpg',
      title: 'A1-Technology landing page'
    },
    {
      id: 7,
      link: 'https://gamzatov.github.io/Georgina/',
      img: 'https://testtovich.000webhostapp.com/works/georgina.jpg',
      title: 'Georgina Beauty Salon'
    },
    {
      id: 8,
      link: 'https://gamzatov.github.io/barelief/',
      img: 'https://testtovich.000webhostapp.com/works/barelief.jpg',
      title: 'Barelief'
    },
    {
      id: 9,
      link: 'https://gamzatov.github.io/reactPizza/',
      img: 'https://testtovich.000webhostapp.com/works/pizza.jpg',
      title: 'React Pizza'
    }
  ];
  const [dark, setDark] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [worksPerPage, setWorksPerPage] = useState(2);
  const [works, setWorks] = useState(projects);
  const [loading, setLoading] = useState(false);
  let nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  let previousPage = () => {
    setCurrentPage(currentPage - 1)
  }
  // current work
  const indexOfLastWork = currentPage * worksPerPage;
  const indexOfFirstWork = indexOfLastWork - worksPerPage;
  const currentWork = works.slice(indexOfFirstWork, indexOfLastWork);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className={dark === true ? 'dark-theme' : 'main_wrapper'}>
      <div className="toggle_theme">
        <button className='toggle_wrapper' onClick={() => setDark(!dark)}>
          {
            dark === true ? <i class="ri-moon-line change-theme ri-sun-line" id="theme-button"></i> : <i class="ri-moon-line change-theme" id="theme-button"></i>
          }
        </button>
      </div>
      <Header dark={dark} />

      <main className="main">

        <section className="filters container">
          <Options dark={dark} />
          <div className="filters__sections">
            <Routes>
              <Route path='/' element={<Projects
                worksPerPage={worksPerPage}
                props={currentWork}
                loading={loading}
                works={works}
                paginate={paginate}
                currentPage={currentPage}
                nextPage={nextPage}
                previousPage={previousPage}
                dark={dark}
                indexOfLastWork={indexOfLastWork}
              />} />
              <Route path='/skills' element={<Skill  dark={dark}/>} />
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
