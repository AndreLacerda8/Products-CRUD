import { createContext, useState } from "react"

export const ModalContext = createContext({})

export function ModalProvider({ children }){
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [productId, setProductId] = useState('')

    const [method, setMethod] = useState('')

    const [isOpen, setIsOpen] = useState(false)
    const [modalMessage, setModalMessage] = useState(false)

    function setData(data, value){
        switch (data) {
            case 'name':
                setProductName(value)
                break

            case 'price':
                setPrice(value)
                break
            
            case 'image':
                setImage(value)
                break

            case 'id':
                setProductId(value)
                break

            default:
                break;
        }
    }

    function toggleModal(){
        setIsOpen(!isOpen)
    }

    function setCurrentMethod(method){
        setMethod(method)
    }

    function toggleModalMessage(resp){
        setModalMessage(resp)
    }

    return(
        <ModalContext.Provider value={{
            productName,
            price,
            image,
            productId,
            setData,
            isOpen,
            toggleModal,
            modalMessage,
            toggleModalMessage,
            method,
            setCurrentMethod
        }}>
            {children}
        </ModalContext.Provider>
    )
}