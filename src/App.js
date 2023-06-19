import React from 'react';
import {comments} from './commentData';
import Card from './Card';

import './style.css';

function App(){
    const listComments = comments.map((comment, i) => {
        return <Card key={i} commentObject={comment}/>
    });

    return(
        <div>
            {listComments}
        </div>
    )
}

export default App;

