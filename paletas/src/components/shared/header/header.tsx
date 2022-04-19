import React from 'react';
import { Link } from "react-router-dom"
import "./style.css";



export function Header () {


    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid">
                <Link className="text-header" to="/">Blueletas</Link>
                <Link className="text-header" to="/create">Cadastrar Paleta</Link>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

