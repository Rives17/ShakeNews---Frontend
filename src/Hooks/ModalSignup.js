import './Modal.css'

function ModalSignup({ children, setShowModalSignup }) {
    return (
        <div className="modal-background" onClick={() => setShowModalSignup(false)}>
            <div className="modal-foreground" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalSignup
