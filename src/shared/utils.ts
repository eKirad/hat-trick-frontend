import type { MenuProps } from 'antd'
import { headerItems } from './consts'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'

export const antHeaderItems: MenuProps['items'] = headerItems.map((label: string, key: number) => ({
    key,
    label,
}))

export const antSidebarItems: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1)

    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1
            return {
                key: subKey,
                label: `option${subKey}`,
            }
        }),
    }
})

export const getFullName = (firstName: string, lastName: string): string => `${firstName} ${lastName}`.trim()
