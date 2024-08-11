import React from 'react'
import Loding from '../loading.gif'

const spinner = () => {
    return (
        <div className='text-center my-3'>
            <img src={Loding} alt="Loading" />
        </div>
    )
}

export default spinner
