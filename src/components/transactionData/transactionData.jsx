import React, { useState, useEffect } from 'react';
import './transactionData.scss';
import axios from 'axios';
import DataTable from './../dataTable/dataTable';

const headings = ['amount','status','method','date'];

const processedRecords = [];

const TransactionData = () => {
    const [records, setRecords] = useState([]);
    //const [processedRecords, setProcessedRecords] = useState([]);
    let err;

    useEffect(() => {
        axios.get('./records.json')
        .then((response) => {
            setRecords(response.data);
        })
        .catch((error) => {
            err = error;
        })
    },[])

    const formatDate = (date) => {
        let newDate = new Date(date);
        let month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        newDate = month[newDate.getMonth()]+" "+newDate.getDate()+","+newDate.getFullYear()
        return newDate;
    }

    const rowData = () => {
        let obj = {};
        Object.keys(records).forEach(element => {
            const totalRecords = records.length;
            let methods = records[element]['bank']+"...."+records[element]['last4'];
            let newDate = formatDate(records[element]['date']);
            
            obj = {
                amount: records[element]['amount'],
                status: records[element]['status'],
                method:  methods,
                date: newDate,
            }
            processedRecords.push(obj);            
        });
    }
    
    rowData();
    console.log("processedRecords: ",processedRecords);
    return(
        <div className="data">
            <div className="data-title">
                All Transactions
            </div>
            <DataTable 
            title={headings} 
            data={processedRecords} 
            error={err}
            recordsPerPage='5'
            />
        </div>
    )
}

export default TransactionData