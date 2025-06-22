import LoderComponent from '../components/LoaderComponent'
import React from 'react'

export default function Loader() {
    return (
        <div className='container mt-5 cont-cont-loader'>
            <div className='d-flex justify-content-center' style={{marginTop:'13rem'}}>
                <LoderComponent />
            </div>
        </div>
    )
}
