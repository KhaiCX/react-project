import React, { useState } from "react"
import { User } from "../../schemas/user.schema"

function UserComponent() {
    const [user, setUser] = useState<User>({
        id: 0,
        fullName: '',
        email: '',
        username: '',
        phone: '',
        imageUrl: '',
        role: 'MEMBER',
        status: false,
        created_at: '',
        updated_at: ''
    });

    const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        // const { name, value } = event.target;
        // setUser(prevUser => ({
        //     ...prevUser,
        //     [name]: value
        // }))
        console.log(event.target)
    }
    //console.log(user)
    return (
        <form>
            <div className="row form">
                <div className="col-sm-4">
                    <input value={user.fullName} onChange={handleUser} type="text" className="form-control" placeholder="Enter full name" name="fullName" />
                </div>
                <div className="col-sm-4">
                    <input type="text" className="form-control" placeholder="Enter email" name="email" />
                </div>
                <div className="col-sm-4">
                    <input type="text" className="form-control" placeholder="Enter user name" name="userName" />
                </div>
            </div>
            <div className="row form">
                <div className="col-sm-4">
                    <input type="file" className="form-control" name="imageUrl" />
                </div>
                <div className="col-sm-4">
                    <select className="form-select">
                        <option>ADMIN</option>
                        <option>USER</option>
                    </select>

                </div>
                <div className="col-sm-4">
                    <input checked={user.status} onChange={handleUser} type="checkbox" name="status" />
                </div>
            </div>
            <div className="row form">
                <div className="col-sm-4">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form >
    )
}
export default UserComponent