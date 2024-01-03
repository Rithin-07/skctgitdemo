import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ShopNav() {
    let name = useParams()

    return(
        <div className='overflow-hidden'>
            <div className='font-display mt-12 mb-2 text-3xl md:text-4xl font-medium text-center text-gray-700'>
                {name.collection === undefined && <h1> Toys's Collection </h1>}
                {name.collection === 'Plushies' && <h1>Plushies</h1>}
                {name.collection === 'Construction Toys' && <h1>Construction Toys</h1>}
                {name.collection === 'PS' && <h1>PS</h1>}
                {name.collection === 'Creative Toys' && <h1>Creative Toys</h1>}
            </div>
            <div className='font-body text-gray-600 text-center'>
                {name.collection === undefined && <p>Shopping for Toys has never been easier</p>}
                {name.collection === 'Plushies' && <p>A bedroom without a Teddy is like a face without a smile.</p>}
                {name.collection === 'Construction Toys' && <p>Toys to make the little ones more active and strong </p>}
                {name.collection === 'PS' && <p>There’s no better place to play than playstation.</p>}
                {name.collection === 'Creative Toys' && <p>Show your love and gift your children toys from us. </p>}
            </div>

            <div className='flex flex-wrap space-y-2 md:space-y-0 space-x-2 md:space-x-4 w-full items-end
            justify-center md:mt-6 mb-6 md:mb-12 font-body text-gray-700'>
                <Link to={'/shop'} className={name.collection === undefined && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40'>Shop All</button>
                </Link>
                <Link to={`/shop/airPurifying`} className={name.collection === 'airPurifying' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40'>Plushies</button>
                </Link>
                <Link to={`/shop/beginner`} className={name.collection === 'beginner' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40'>Construction Toys</button>
                </Link>
                <Link to={`/shop/pet-friendly`} className={name.collection === 'pet-friendly' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40'>PS</button>
                </Link>
                <Link to={`/shop/succulents`} className={name.collection === 'succulents' && 'hidden'}>
                    <button className='p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40'>Creative Toys</button>
                </Link>
            </div>
        </div>
    )
}

export default ShopNav