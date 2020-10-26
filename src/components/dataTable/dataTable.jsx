import React, { useEffect, useState } from 'react';
import './dataTable.scss';

const DataTable = (props) => {
const { title, data, error, recordsPerPage } = props;
    //const [displayRecords, setTotalRecords] = useState([]);
   // let currentPage = 1;
   // const displayRecords = [];

    const Prev = () => {
        console.log("PREV:");
    }

    const Next = () => {
        console.log("Next:");
    }

   // paginate(currentPage,recordsPerPage);

    return (
        <div className='table'>
            <div className='table-header'>
            {title.map((resp,key) => {
                return(
                    <div className='table-header-title' key={key}>{resp}</div>
                );                
            })}
            </div>
            <div className='table-body'>
                {data.map((response,key) => {
                    console.log(response);
                    return(
                        <div key={key}>
                            <>
                                <div className='table-body-rows'>
                                    {title.map((val, key) => {
                                        return(
                                            <div className='table-body-data' key={key}>{response[val]}</div>   
                                        )
                                    })}
                                </div>
                                <div className="table-body-border"></div>
                            </>        
                        </div>
                    );
                })}
            </div>
            <div className='table-paginate'>
                <button onClick={(e) => Prev(e)}>Prev</button>
                <button onClick={(e) => Next(e)}>Next</button>
            </div>
        </div>
    )
}

export default DataTable;