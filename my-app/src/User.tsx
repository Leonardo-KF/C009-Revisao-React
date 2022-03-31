import React, { useState } from 'react';
import "./user.css";

type User = {
    name: string,
    id: number,
    email: string,
    senha: string,
    idade?: number,
    corFavorita: string,
    cargo: string,
    feNaHumanidade: boolean,
} 
// name, id, email, senha, idade, corFavorita, cargo, feNaHumanidade

export function UserList () {
    const [users, setUsers] = useState<User[]>([
        {
            name: "Leo",
            id: 1, 
            email: "leo@gmail.com",
            senha: "qwer1234",
            idade: 21,
            corFavorita: "verde",
            cargo: "FullStack Developer",
            feNaHumanidade: true
        }, 
        {
            id: 2,
            email: "jhonathan@gmail.com",
            name: "jhonathan",
            corFavorita: "preto",
            idade: 28,
            senha: "j1234",
            cargo: "estagio",
            feNaHumanidade: false
        }
    ]);



    return(
    <>
        {users?.map((user) => {
            return (
                <div className="card-user" >
                    <h1>Nome: {user.name}</h1>
                    <h2>Idade: {user.idade}</h2>
                    <h2>Cor Favorita: {user.corFavorita}</h2>
                    <h2>Cargo: {user.cargo}</h2>
                </div>
            )
        })}
    </>
    )
}


export function UserCreate (){
    return (
        <>
            <h1> Formulario </h1>
        </>
    )
}
