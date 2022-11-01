import React from 'react'

export default function Layout({ children }) {
    return (
        <div>
            <h1>This is Header page</h1>
            {children}
            <h1>This is Footer page</h1>
        </div>
    )
}
