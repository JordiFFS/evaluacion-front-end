import './HeaderGenerates.css'


export const HeaderGenerates = ({ title = 'Cabecera general', setSearch, search }) => {

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
                            onChange={(e) => { setSearch(e.target.value) }}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
