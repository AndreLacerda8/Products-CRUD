import './style.css'
import { ModalContext } from '../../modalContext/ModalContext'
import { useContext } from 'react'

export function ProductCard(props){
    const { setData, setCurrentMethod, toggleModal } = useContext(ModalContext)
    function setModal(action, productId, productName, price, image){
        toggleModal(true)
        setCurrentMethod(action)
        setData('id', productId)
        setData('name', productName)
        setData('price', price)
        setData('image', image)
    }

    const price = Number(props.price).toFixed(2).replace('.', ',')

    return (
        <div className='product-card' id={props.id}>
            <h3>{props.name}</h3>
            <img src={props.image} alt={props.name} />
            <span>R$ {price}</span>

            <div className='buttons'>
                <button onClick={() => setModal('put', props.id, props.name, props.price, props.image)}>Editar</button>
                <button onClick={() => setModal('delete', props.id, props.name, props.price, props.image)}>Deletar</button>
            </div>
        </div>
    )
}