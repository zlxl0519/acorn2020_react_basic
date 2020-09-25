
import { Button } from '@material-ui/core';
import React from 'react';

export default ()=>{
    return(
        <div>
            <h1>Material Ui 사용해 보기</h1>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
            <Button variant="contained" color="secondary">
                Hello World
            </Button>
            <Button variant="contained" color="default">
                Hello World
            </Button>
            <Button variant="text" color="primary">
                Hello World
            </Button>

        </div>
    );
};