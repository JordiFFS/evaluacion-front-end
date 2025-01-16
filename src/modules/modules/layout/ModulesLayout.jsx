import { NavBar } from '../../components'

export const ModulesLayout = ({ children }) => {
    return (
        <section style={{
            height: '100vh',
            width: '100vw',
            backgroundColor: '#e5e5e5',
            margin: 0,
            padding: 0
        }}>
            <div className="d-flex flex-column" style={{ height: '100%' }}>
                <NavBar />
                <div className="flex-grow-1 p-4" style={{ overflowY: 'auto' }}>
                    {children}
                </div>
            </div>
        </section>
    )
}
