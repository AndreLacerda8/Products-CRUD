import { Header } from './components/Header'
import Options from './components/Options';
import { Products } from './components/Products'
import { ModalProduct, ModalMessage} from './components/Modal'
import { ModalProvider } from './modalContext/ModalContext'

function App() {
  return (
    <>
      <Header />
      <ModalProvider>
        <ModalMessage />
        <ModalProduct />
        <Options />
        <Products />
      </ModalProvider>
    </>
  );
}

export default App;