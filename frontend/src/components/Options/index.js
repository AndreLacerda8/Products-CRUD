import './style.css'
import { useContext } from 'react'
import { ModalContext } from '../../modalContext/ModalContext'

export default function Options(){

    const { toggleModal, setCurrentMethod } = useContext(ModalContext)
    
    function setModal(){
        toggleModal(true)
        setCurrentMethod('post')
    }

    return(
        <div className='options'>
            <button onClick={setModal} className='addProduct'>Adicionar Produto</button>
        </div>
    )
}