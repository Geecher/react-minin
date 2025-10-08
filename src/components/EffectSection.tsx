import Button from "./Button/Button.tsx";
import Modal from "./Modal/Modal.tsx";
import {useCallback, useEffect, useState} from "react";
import useInput from "../hooks/useInput.ts";

type TUser = {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    address?: {
        street?: string;
        suite?: string;
        city?: string;
        zipcode?: string;
        geo?: {
            lat?: string;
            lng?: string;
        };
    };
    phone?: string;
    website?: string;
    company?: {
        name?: string;
        catchPhrase?: string;
        bs?: string;
    };
};

function EffectSection() {
    const input = useInput();
    const [modal, setModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<TUser[]>([]);

    const fetchUsers = useCallback(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setUsers(users);
        setLoading(false);
    }, [])

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    return (
        <section className="effect-section">
            <h2>Эффекты и очистка эффектов</h2>
            <p>В этом разделе будет информация об использовании эффектов (useEffect) в React, а также о важности
                очистки эффектов для предотвращения утечек памяти и других проблем.</p>
            <Button onClick={() => setModal(!modal)}>Открыть информацию</Button>
            <Modal open={modal}>
                <h3>Привет от модалки</h3>
                <p>Здесь могла быть важная информация об эффектах в React.</p>
                <Button onClick={() => setModal(!modal)}>Закрыть</Button>
            </Modal>
            {
                loading ? <p>Loading</p> : (
                    <>
                        <input type="text" className={'control'} {...input}/>
                        <ul>
                            {users.filter(user => user.name?.toLowerCase().includes(input.value.toLowerCase())).map(user => (
                                <li key={user.id}>{user.name} ({user.email})</li>
                            ))}
                        </ul>
                    </>

                )
            }
        </section>
    )
}

export default EffectSection;