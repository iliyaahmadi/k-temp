import React from 'react'
import { useState, useEffect } from 'react'


//get pages
const calculateRange = (data, rowsPerPage) => {
    const range = [];
    const num = Math.ceil(data.length / rows);
    let i = 1;
    for (let i = 1; i <= num; i++) {
        range.push(i);
    }
    return range;
};

//get data per page
const sliceData = (data, page, rowsPerPage) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

//hook
const useTable = (data, page, rowsPerPage) => {
    const [tableRange, setTableRange] = useState([]);
    const [slice, setSlice] = useState([]);

    useEffect(() => {
        const range = calculateRange(data, rowsPerPage);
        setTableRange([...range]);

        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice]);
    }, [data, setTableRange, page, setSlice]);

    return { slice, range: tableRange };
};
export default useTable