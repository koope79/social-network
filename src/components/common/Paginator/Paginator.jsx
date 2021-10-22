import React from 'react';
import { useState } from 'react';
import s from '../Paginator/Paginator.module.css';

const Paginator = (props) => {
    // всего юзеров, кол-во на странице
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); // кол-во страниц по 5 пользователей
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionSize = 10;
    let portionCount = Math.ceil(pagesCount / portionSize); // кол-во порций по 10 страниц
    let [portionNumber, setportionNumber] = useState(1);
    let leftBorder = (portionNumber -1 ) * portionSize + 1;
    let rightBorder = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 && 
            <button onClick={ () => {setportionNumber(portionNumber-1)} }>PREV</button>
            }
            
            {
                pages
                .filter(p => p >= leftBorder && p <= rightBorder)
                .map(p => {
                    return <div className={s.numberPage}>
                        <span className={props.currentPage === p && s.currentPage} onClick={() => { props.onPageChanged(p) }}>{p}</span>
                    </div>
                })
            }

            { portionNumber < portionCount && 
                <button onClick={ () => {setportionNumber(portionNumber+1)} }>NEXT</button>
            }
        </div>
    );
}

export default Paginator;