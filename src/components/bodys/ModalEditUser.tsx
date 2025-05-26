import { useEffect, useState } from "react"
import { Modal, Form, Button } from "react-bootstrap"
import { UserService } from '../../services/UserService'
import { toast } from 'react-toastify'
const ModalEditUser = (props: any) => {
    const { showModalEdit, handleCloseEditModal, dataUserEdit, handleEditUserFromModal } = props
    const [objectUserUpdate, setObjectUserUpdate] = useState({
        lastName: ''
    })

    const handleUpdateUser = async () => {
        console.log(objectUserUpdate)
        let response = await UserService.updateUser(objectUserUpdate)

        console.log(response)

        if (response && response.status === 200) {
            handleCloseEditModal()
            toast.success('The User is Updated success')
            handleEditUserFromModal(objectUserUpdate)
        }
    }

    const handleChangeUser = (e: any) => {
        setObjectUserUpdate(prev => ({
            ...prev
            , [e.target.name]: e.target.value
        }))
        console.log(objectUserUpdate)
    }

    useEffect(() => {
        setObjectUserUpdate(dataUserEdit)
    }, [dataUserEdit])
    return (
        <Modal show={showModalEdit} onHide={handleCloseEditModal}>
            <Modal.Header closeButton>
                <Modal.Title>Edit User modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input name="lastName" type="text" value={objectUserUpdate.lastName} onChange={handleChangeUser} className="form-control" id="lastName" />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEditModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleUpdateUser}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalEditUser