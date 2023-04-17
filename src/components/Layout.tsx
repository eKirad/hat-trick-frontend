import React, { useEffect, useState } from 'react'

import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { antHeaderItems, antSidebarItems } from '../shared/utils'
import UserDetails from './user/UserDetais'
import { mock_user_data } from '../shared/consts'

const { Header, Content, Sider } = Layout

const CustomLayout = () => {
    const [users, setUsers] = useState<any[]>([])

    useEffect(() => {
        setUsers(mock_user_data)
    }, [])

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={antHeaderItems} />
            </Header>
            <Layout>
                <Sider width={200} style={{ background: 'blue' }}>
                    <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }} items={antSidebarItems} />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 10,
                            minHeight: 280,
                        }}
                    >
                        {users.map((user) => (
                            <UserDetails user={user} key={user.age} />
                        ))}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default CustomLayout
