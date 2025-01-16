import { useEffect, useState } from 'react';

import { HeaderGenerates } from '../components'
import { ModalView } from '../../../components';

import { DetailPublication } from '../detail';

import { usePublicationsStore } from '../hooks';
import './PublicationsPages.css'

export const PublicationsPages = () => {

    const [openModal, setOpenModal] = useState(false);
    const [active, setActive] = useState(null);
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    const {
        useGetPublications,
        useGetSearchPublications
    } = usePublicationsStore();

    const dateConvert = (date) => {
        const newDate = new Date(date);
        const day = newDate.getDate();
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const GetPublications = async () => {
        const { ok, data } = await useGetPublications();
        if (ok) {
            setData(data);
        }
    };

    const handleButton = (item) => {
        setActive(item);
        setOpenModal(true)
    };

    useEffect(() => {
        if (search.length > 0) {
            const GetSearchPublications = async () => {
                const { ok, data } = await useGetSearchPublications(search);
                if (ok) {
                    setData(data);
                }
            };
            GetSearchPublications();
        } else {
            GetPublications();
        }
    }, [search]);

    useEffect(() => {
        if (!openModal) {
            setActive(null);
        }
    }, [openModal])

    return (
        <>
            <HeaderGenerates title="Publicaciones" setSearch={setSearch} search={search} />
            <div className="grid-container"  >
                {
                    data.map((item, index) => (
                        <div className="card" key={index} onClick={() => { handleButton(item) }}>
                            <p className="title">{item.text}</p>
                            <p className="author">Por: {item.name}</p>
                            <p className="date">Fecha: {dateConvert(item.date)}</p>
                            <div className="interactions">
                                <span>👍 {item.likes}</span>
                                <span>💬 {item.comments}</span>
                                <span>🔄 {item.shares}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <ModalView isOpen={openModal} setOpenModal={setOpenModal} >
                <DetailPublication active={active} dateConvert={dateConvert} />
            </ModalView>
        </>
    )
}
