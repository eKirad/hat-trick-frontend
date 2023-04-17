import { Card } from 'antd'
import React from 'react'
import { getFullName } from '../../shared/utils'

type UserDetailsT = {
    user: any
}

const UserDetails: React.FC<UserDetailsT> = ({ user }) => (
    <Card title={getFullName(user.firstName, user.lastName)} bordered={false} style={{ width: 300, margin: 10 }}>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.age}</p>
    </Card>
)

export default UserDetails
