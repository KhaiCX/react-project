import { useEffect, useState } from "react"
import { Modal, Form, Button } from "react-bootstrap"
import { UserService } from '../../services/UserService'
import { toast } from 'react-toastify'
const ModalDeleteUser = (props: any) => {
    const { showModalDelete, handleCloseModalDelete, dataUserDelete, handleDeleteUserSuccess } = props

    const handleSubmitDeleteUser = async (user: any) => {
        let response = await UserService.deleteUser(user)
        if (response && response.data) {
            handleCloseModalDelete()
            toast.success('The User is Deleted success')
            handleDeleteUserSuccess(user)
        }
    }
    return (
        <Modal show={showModalDelete} onHide={handleCloseModalDelete}>
            <Modal.Header closeButton>
                <Modal.Title>Edit User modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete data User({dataUserDelete.id}, {dataUserDelete.firstName}, {dataUserDelete.lastName}, {dataUserDelete.age})</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModalDelete}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleSubmitDeleteUser(dataUserDelete)} >
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalDeleteUser