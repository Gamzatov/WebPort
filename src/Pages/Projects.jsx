import React from 'react';
import Loader from '../Components/Loader';


const Projects = ({
                      loading,
                      dark,
                      setShow,
                      show,
                      projects,
                       }) => {

    return (
        <div className="projects">
            <div className="project_grid">

                {loading ? [...Array(4)].map((el) => <Loader />) :
                    projects.slice(0, 4).map((el) =>
                        <div className="item" key={el.id}>
                            <img className="project_img" src={el.img} alt={el.title} />
                            <div className={dark === true ? "dark_overlay overlay" : "overlay"}>
                                <div className="text">
                                    <div className="item_title">
                                        {<p>{el.title}</p>}
                                    </div>
                                    <div className="item_link">
                                        <a href={el.link} target='_blank' className="item-link">Visit</a>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }

                {
                    show  || loading ? projects.slice(4).map((el) =>
                        <div className="item" key={el.id}>
                            <img className="project_img" src={el.img} alt={el.title} />
                            <div className={dark === true ? "dark_overlay overlay" : "overlay"}>
                                <div className="text">
                                    <div className="item_title">
                                        {<p>{el.title}</p>}
                                    </div>
                                    <div className="item_link">
                                        <a href={el.link} target='_blank' className="item-link">Visit</a>
                                    </div>
                                </div>
                            </div>
                        </div>) : ''
                }
            </div>
            <div className="btn_wrapper">
                <button className='button show_btn' onClick={() => setShow(!show)}>{show ? 'Show less' : 'Show more'}</button>
            </div>

        </div>
    );
}

export default Projects;
