import React, { useState } from "react";
import ReactMarkdown from 'react-markdown'

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

    const MODAL_STYLES = {
        zIndex: "1000",
        width: "35%",
        borderRadius: ".5em",
        overflowY: "auto",
        height: "90%"
    };
    const OVERLAY_STYLE = {
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "1000",
        overflowY: "auto"
    };

    return (
        <>


            {modal && (
                <div className="modal">
                    <div
                        style={OVERLAY_STYLE}
                        onClick={() => { props.setModalActive(false); toggleModal }}
                        className="overlay"></div>
                    <div className="modal-content" style={MODAL_STYLES}>
                        {/* <h3>{props.propsModal.TitreActu} </h3> */}
                        <p><ReactMarkdown transformImageUri={uri =>
                            uri.startsWith("http") ? uri : `https://admin.agathafestival.fr${uri}`
                        }>{props.propsModal.TexteActu}</ReactMarkdown></p>
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