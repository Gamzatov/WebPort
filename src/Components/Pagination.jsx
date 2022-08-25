import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Pagination({ 
    worksPerPage,
    totalWorks,
    paginate,
    currentPage,
    nextPage,
    previousPage,
    dark,
     }) {
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalWorks / worksPerPage); i++) {
        pageNumbers.push(i);
    }
    const lastPage = pageNumbers.length
    console.log('page >>>', currentPage)
    return (
        <div>
            <nav>
                <ul className={dark === true ? 'paginate-list dark ' : 'paginate-list '}>
                    <li >
                        <button onClick={() => previousPage(currentPage)} className={currentPage === 1 ? 'disabled' : dark === true ? 'dark_text controls' : 'controls'} disabled={currentPage === 1 ? true : false}>
                            <ion-icon className='icon' name="arrow-back-circle-outline"></ion-icon>
                        </button>
                    </li>
                    <div className='mobile_pages'>
                        {currentPage} / {lastPage}
                    </div>
                    {
                        pageNumbers.map((el, index) =>

                            <li key={el} className='mob'>
                                <button className={currentPage === index + 1 ? 'paginate-btn-active' : 'paginate-btn'}
                                    onClick={() => paginate(el)} href='!#'>
                                    {el}
                                </button>
                            </li>)
                    }
                    <li>
                        <button disabled={currentPage === 5 ? true : false} onClick={() => nextPage(currentPage)} className={currentPage === 5 ? 'disabled' : dark === true ? 'dark_text controls' : 'controls'}>
                            <ion-icon className='icon' name="arrow-forward-circle-outline"></ion-icon>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
