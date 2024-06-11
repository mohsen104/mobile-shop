import React from 'react'
import Product from '@/components/modules/Product';

function Products({ data }) {
    return (
        <div className='grid grid-cols-3 max-sm:grid-cols-1'>
            {
                data.length == 0
                    ?
                    <p className='pb-5'>کالای مورد نظر یافت نشد !</p>
                    :
                    data.map(el => (
                        <Product key={el.id} {...el} />
                    ))
            }
        </div>
    )
}

export default Products