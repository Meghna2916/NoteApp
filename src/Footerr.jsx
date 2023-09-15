import React from 'react';

const Footerr =()=>{

    const year = new Date().getFullYear();

    return(
        <>
        <footer>
            <p>copyright © {year}</p>
        </footer>
        </>
    )
}
export default Footerr;