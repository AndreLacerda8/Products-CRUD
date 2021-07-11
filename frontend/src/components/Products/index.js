import './style.css'
import { useContext, useEffect, useState } from 'react'

import { ProductCard } from '../ProductCard'
import { ModalContext } from '../../modalContext/ModalContext'

const axios = require('axios')


export function Products(){
    const { isOpen } = useContext(ModalContext)

    const [error, setError] = useState(null)
    const [items, setItems] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:8080')
            .then(products => products.data, (error) => setError(error))
            .then(arr => setItems(arr))
    }, [isOpen])

    if(error){
        return <div><p>Ocorreu um erro, tente recarregar a página.</p></div>
    }

    else{
        return (
            <div className='products-container'>
                {items.map(item => (
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>
        )
    }

}