import { useEffect, useState } from "react"
import { User } from "../../schemas/user.schema"
import { Table, Button, Row, Col } from 'react-bootstrap'
import { UserService } from '../../services/UserService'
import ModalAddNew from './ModalAddNew';
import ModalEditUser from "./ModalEditUser";
function UserListComponent() {
    const [users, setUsers] = useState<User[]>([])

    const [show, setShow] = useState(false)
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [dataUserEdit, setDataUserEdit] = useState({
        firstName: '',
        lastName: '',
        age: 0
    })
    const handleEditUserFromModal = (user: any) => {
        let index = users.findIndex(item => item.id === user.id)
        users[index] = user
        setUsers([...users])
        console.log(index)
    }

    const handleEditUser = (user: any) => {
        setShowModalEdit(true)
        setDataUserEdit(user)
    }
    const handleClose = () => {
        setShow(false)
    }

    const handleCloseEditModal = () => {
        setShowModalEdit(false)
    }

    const handleListUser = (user: any) => {
        setUsers([user, ...users])
    }

    useEffect(() => {
        const getListUser = async () => {
            try {
                const result = await UserService.getAllUsers();
                if (result && result.users) {
                    setUsers(result.users);
                }
            } catch (error) {
                console.error('Failed to fetch users: ', error)
            }
        }
        getListUser()
    }, [])
    return (
        <>
            <Row>
                <Col sm={8}>
                    <h5>List Users:</h5>
                </Col>
                <Col sm={4}>
                    <Button onClick={() => { setShow(true) }} variant='success'>Add new User
                    </Button>
                </Col>
            </Row>
            <Row>
                <div className="table-responsive">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.length > 0 && users.map(user => (
                                <tr key={`user-${user.id}`}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Button variant="success">Detail</Button>
                                        <Button variant="primary" onClick={() => handleEditUser(user)}>Update</Button>
                                        <Button variant="danger">Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table >
                </div>
            </Row>
            <ModalAddNew
                show={show}
                handleClose={handleClose}
                handleListUser={handleListUser}
            />
            <ModalEditUser
                showModalEdit={showModalEdit}
                handleCloseEditModal={handleCloseEditModal}
                dataUserEdit={dataUserEdit}
                handleEditUserFromModal={handleEditUserFromModal} />
        </>
    )
}
export default UserListComponent