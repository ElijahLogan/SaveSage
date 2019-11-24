import React, { Fragment, useState, useEffect } from 'react'
import Edam from '../components/util/Edam'
import Edexe from './Pages/Edexes';



//make state using hooks

//call api to get list of objects

//map list of objects into individual index

function Index_list() {
    const [name, setName] = useState(true);

    useEffect(() => {
        Edam.search_index()
    });
    

    return (
        <div className="RecipeList">

            {this.props.recipes.map((recipe) => {
                <Carousel>
                    <Recipe recipe={recipe} />
                </Carousel>
            })}
        </div>
    )
}
}