import { useEffect, useState } from "react"
import { User } from "../../schemas/user.schema"
import { Table } from 'react-bootstrap'
import { UserService } from '../../services/UserService'

function UserComponent() {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        const userList = async () => {
            try {
                const result = await UserService.getAllUsers();
                if (result && result.users) {
                    setUsers(result.users);
                }
            } catch (error) {
                console.error('Failed to fetch users: ', error)
            }
        }
        userList()
    }, [])
    return (
        <div className="table-responsive">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Maiden Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Birth Date</th>
                        <th>Image</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.length > 0 && users.map(user => (
                        <tr key={`user-${user.id}`}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.maidenName}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>{user.birthDate}</td>
                            <td>{user.image}</td>
                            <td>
                                `${user.address?.address ?? ''} ${user.address?.city ?? ''} ${user.address?.state ?? ''} {user.address?.postalCode ?? ''}`
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table >
        </div>
    )
}
export default UserComponent