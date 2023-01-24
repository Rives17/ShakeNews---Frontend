import './Modal.css'

function ModalLogin({ children, setShowModalLogin }) {
    return (
        <div className="modal-background" onClick={() => setShowModalLogin(false)}>
            <div className="modal-foreground" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalLogin
