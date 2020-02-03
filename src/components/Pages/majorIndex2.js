import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Edam from '../util/Edam';
import Edex from '../Pages/Edexes';
import styled from 'styled-components';


function MajorIndex2() {
    const [indexes, setIndex] = useState([]);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        //get back indexes
        let majorIndexes = Edam.search_index()
        majorIndexes.then(res => {

            //array of index
            let res_indexes = res.data.majorIndexesList
            console.log(res_indexes)

            setIndex(res_indexes)
        })
        console.log(indexes)
    }, []);

    return (
        <div>
            {indexes.map((index) => {
                return <h1> {index.indexName}</h1>
            }

            )}
            <h1>working?</h1>
        </div>
    )

}

export default MajorIndex2