import React from 'react';
import { Link } from "react-router-dom"
import { useSearch } from '../../../hooks/useSearch';
import "./style.css";



export function Header () {

    const {setSearch} = useSearch();


    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid">
                <Link className="text-header" to="/">Blueletas</Link>
                <Link className="text-header" to="/create">Cadastrar Paleta</Link>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" onChange={e => setSearch(e.target.value)} placeholder="Search" aria-label="Search"/>
                </form>
            </div>
        </nav>
    )
}

