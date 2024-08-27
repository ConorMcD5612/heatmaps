"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { useRef, useEffect } from 'react'

type Props = {
  
    onClose: () => void,
    onSave: () => void,
    children: React.ReactNode
}

export default function Dialog({onClose, onSave, children}: Props) {
    const searchParams = useSearchParams()
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    const showDialog = searchParams.get('showDialog')
    

    useEffect(() => {
        if(showDialog === 'y') {
            dialogRef.current?.showModal()
        } else {
            dialogRef.current?.close()
        }
    }, [showDialog])

    const closeDialog = () => {
        dialogRef.current?.close()
        onClose()
    }

    const clickSave = () => {
        onSave()
        closeDialog()
    }

    const dialog: JSX.Element | null = showDialog === 'y' ? (
        <dialog ref={dialogRef}>
            <div>
                {children}

            </div>
        </dialog>
    ) : null

    return dialog
}
