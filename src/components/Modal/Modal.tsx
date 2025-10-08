import {createPortal} from 'react-dom'
import './Modal.module.css'
import {useEffect, useRef} from "react";

type ModalProps = {
    open: boolean
    children: React.ReactNode
}

function Modal({open = false, children}: ModalProps) {
    const dialog = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        if (open) {
            dialog.current?.showModal()
        } else {
            dialog.current?.close()
        }
    }, [open])

    return createPortal(
        <dialog ref={dialog}>{children}</dialog>,
        document.getElementById('modal') as HTMLElement)
}

export default Modal