import React from 'react'
import { useLocation } from 'react-router-dom';
import { withRouter } from "../withRouter";

const DetailProduct = ({ name, file_foto, price, is_available }) => {
    const location = useLocation()
    return (
        <>
            <p>{location.state.name}</p>
            <p>{location.state.file_foto}</p>
            <p>{location.state.price}</p>
            <p>{location.state.is_available}</p>
        </>
    )
}

export default withRouter(DetailProduct)