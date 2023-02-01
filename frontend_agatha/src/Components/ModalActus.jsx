import React, { useState } from "react";

const ModalActus = (props) => {
    const [modal, setModal] = useState(props.modalActive);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    return (
        <>


            {modal && (
                <div className="modal">
                    <div
                        onClick={() => { props.setModalActive(false); toggleModal }}
                        className="overlay"></div>
                    <div className="modal-content">
                        <h3>{props.propsModal.TitreActu} </h3>
                        <p>{props.propsModal.TexteActu}</p>
                        <button className="close-modal" onClick={() => { props.setModalActive(false); toggleModal }}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </>

    );
};

export default ModalActus;