import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import users from "../../models/UserDummy"
import { faCircleCheck, faCircleDot } from "@fortawesome/free-solid-svg-icons"

function UserListComponent() {
    return (
        <div className="row form">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>UserName</th>
                        <th>Phone</th>
                        <th>Image</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>CreatedAt</th>
                        <th>UpdatedAt</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.fullName}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.phone}</td>
                            <td>{user.imageUrl}</td>
                            <td>{user.role}</td>
                            <td>
                                <FontAwesomeIcon icon={user.status ? faCircleCheck : faCircleDot} />
                            </td>
                            <td>{user.created_at}</td>
                            <td>{user.updated_at}</td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default UserListComponent