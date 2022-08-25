import React from 'react';
import Pagination from '../Components/Pagination';
import ProjectButton from '../Components/ProjectButton';


const Projects = ({
     props,
     loading,
    worksPerPage,
    totalWorks,
    works,
    paginate,
    currentPage,
    nextPage,
    previousPage,
    dark,
    indexOfLastWork }) => {
    console.log(currentPage + 1);

    return (
        <div className="projects">
            <Pagination
                worksPerPage={worksPerPage}
                totalWorks={works.length}
                paginate={paginate}
                currentPage={currentPage}
                nextPage={nextPage}
                previousPage={previousPage}
                dark={dark}
            />
            <div className="project_grid">

                {
                    props.map((el) =>
                        <div className="item" key={el.id}>
                            <img className="project_img" src={el.img} alt={el.title} />
                            <div class={dark === true ? "dark_overlay overlay" : "overlay"}>
                                <div class="text">
                                    <div className="item_title">
                                        {<p>{el.title}</p>}
                                    </div>
                                    <div className="item_link">
                                        <a href={el.link} className="item-link">Visit</a>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }


            </div>
        </div>
    );
}

export default Projects;
