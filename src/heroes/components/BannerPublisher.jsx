import React from 'react'
import wave1 from '../../assets/Banner wave 1.png'
export const BannerPublisher = ({ handlelSearch, img, publisher, color }) => {

    const style = {
        backgroundColor: color,
    };

    return (
        <div className="non wave_container">
            <div style={style} className='banner'>
                <div className='d-flex justify-content-evenly align-items-center h-100'>

                    <div className='banner__img'>
                        <img className='pe-none ' src={img} alt="" />
                        <div className="pe-none position-absolute wave1 translate-middle-x">
                            <img className="w-100" src={wave1}>
                            </img>
                        </div>

                        <div className=" wave2 pe-none position-absolute   translate-middle-x">
                            <img className="w-100" src={wave1}>
                            </img>
                        </div>

                    </div>

                    <div className='banner__text'>
                        <p>{publisher} </p>
                        <div className="input-group">
                            <input type="search" onChange={handlelSearch} className="text-dark form-control" placeholder="Buscar" aria-label="Search" aria-describedby="search-addon" />
                        </div>
                    </div>


                </div>

            </div>

        </div >

    )
}
