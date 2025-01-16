import React from 'react'
import { NavBar } from '../../components'

export const ModulesLayout = ({ children }) => {
    return (
        <section style={{ height: '100%', backgroundColor: '#e5e5e5' }}>
            <div className="d-flex flex-column" style={{ height: '100%' }}>
                <NavBar />
                <div className="flex-grow-1 p-4" style={{ overflowY: 'auto' }}>
                    {children}
                </div>
            </div>
        </section>
    )
}
