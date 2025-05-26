import { useState } from "react"
import { Modal, Form, Button } from "react-bootstrap"
import { UserService } from '../../services/UserService'
import { toast } from 'react-toastify'
const ModalAddNew = (props: any) => {
    const { show, handleClose, handleListUser } = props

    const [objectUser, setObjectUser] = useState({
        firstName: '',
        lastName: '',
        age: 0
    })

    const handleUserObject = (event: any) => {
        const { name, value } = event.target
        setObjectUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSaveUser = async () => {
        let response = await UserService.postCreateUser(objectUser);

        if (response && response.data) {
            handleClose()
            toast.success('The User is Created success')
            setObjectUser({
                firstName: '',
                lastName: '',
                age: 0
            })
            handleListUser(objectUser)
        }
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new User modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input name="firstName" type="text" value={objectUser.firstName} onChange={handleUserObject} className="form-control" id="firstName" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input name="lastName" type="text" value={objectUser.lastName} onChange={handleUserObject} className="form-control" id="lastName" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input name="age" type="number" value={objectUser.age} onChange={handleUserObject} className="form-control" id="age" />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveUser}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAddNew