import { useEffect } from 'react';
import './ModalView.css';


export const ModalView = ({ children, isOpen, setOpenModal }) => {

    const handleEscKey = (e) => {
        if (e.key === 'Escape') {
            setOpenModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, []);

    const handleClose = () => {
        setOpenModal(false); // Establece el modal como cerrado
    };

    return (
        <>
            {isOpen && (
                <div id="modal" className="modal">
                    <div className="modal-content">
                        <span id="closeModalBtn" className="close-btn" onClick={handleClose}>&times;</span>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}
