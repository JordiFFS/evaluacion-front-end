import { useState } from 'react'
import './HeaderGenerates.css'


export const HeaderGenerates = ({ title = 'Cabecera general', onSearch }) => {

    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (onSearch) {
            onSearch(value); // Enviar el valor al componente padre
        }
    };

    return (
        <>
            <section className='header-generates'>
                <div className="content">
                    <div className="cabecera-left">
                        <h1>{title}</h1>
                    </div>
                    <div className="cabecera-right">
                        <input type="text"
                            placeholder="Buscar..."
                            value={search}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
