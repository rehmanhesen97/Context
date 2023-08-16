import { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CountContext } from '../Context/Context';

function Counts() {
    const { count, setCount,setNewCount } = useContext(CountContext)


    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        const closeCount = localStorage.getItem("say")
        setCount(Number(closeCount))
    }
    const handleSubmit = () =>{
        localStorage.setItem("say",count)
        setShow(false)
      setNewCount(Number(count))
    }
    
    const handleShow = () => setShow(true)


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Sayagac Səhifəsi
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Saygac</Modal.Title>
                </Modal.Header>
                <Modal.Body>{count}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Geri
                    </Button>
                    <Button variant="warning"
                        onClick={() => setCount(count - 1)}
                    >
                        Sayı Azalt
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Yadda Saxla
                    </Button>
                    <Button variant="warning"
                        onClick={() => setCount(count + 1)}
                    >
                        Sayı Artır
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Counts;