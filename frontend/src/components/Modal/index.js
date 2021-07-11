import './style.css'
import { useContext } from 'react'
import { ModalContext } from '../../modalContext/ModalContext'
import axios from 'axios'

export function ModalProduct(){
    const { productName, price, image, setData, productId, method, isOpen, toggleModal, toggleModalMessage } = useContext(ModalContext)

    async function execMethod(event, method){
        event.preventDefault()

        if(method === 'delete'){
            await axios[method](`http://localhost:8080/product/${productId}`)
                .then(resp => showAlert(resp.data))
        }
        else{
            await axios[method]('http://localhost:8080/product', {productId, productName, price, image})
                .then(resp => showAlert(resp.data))
        }
    }

    function showAlert(resp){
        toggleModal(false)
        closeResetModal()

        setTimeout(() => {
            if(typeof resp == 'string')
                toggleModalMessage(resp)
            else
                toggleModalMessage('Algo deu errado')
        }, 200)

        setTimeout(() => {
            toggleModalMessage(false)
        }, 3000)
    }

    function closeResetModal(){
        toggleModal(false)
        setData('name', '')
        setData('price', '')
        setData('image', '')
    }

    function formatMethod(method){
        switch (method) {
            case 'put':
                return 'Editar';
            case 'post':
                return 'Adicionar';
            case 'delete':
                return 'Deletar';
            default:
                break;
        }
    }

    if(!isOpen) return null

    return(
        <div className='bg-modal'>
            <div className='modal'>
                <h3>{formatMethod(method)} Produto</h3>
                <form onSubmit={event => execMethod(event, method)}>
                    <label>
                        Nome:
                        <br />
                        <input required type='text' name='name' value={productName} disabled={method === 'delete'} onChange={event => setData('name', event.target.value)} />
                    </label>
                    <label>
                        Preço:
                        <br />
                        <input required type='number' name='price' value={price} disabled={method === 'delete'} onChange={event=> setData('price', event.target.value)} />
                    </label>
                    <label>
                        URL da Imagem:
                        <br />
                        <input required type='url' name='image' value={image} disabled={method === 'delete'} onChange={event=>setData('image', event.target.value)} />
                    </label>
                    <div className='buttons'>
                        <button type='submit'>
                            {formatMethod(method)}
                        </button>
                        <button onClick={closeResetModal}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export function ModalMessage(){
    const { modalMessage } = useContext(ModalContext)

    const messageSuccess = modalMessage.toString().includes('Sucesso')
    const colorModalSuccess = !messageSuccess && 'red'
    const classModal = modalMessage ? `modal-message show ${colorModalSuccess}` : 'modal-message'
        
    return(
        <div className={classModal}>
            <span>{modalMessage}</span>
        </div>
    )
}