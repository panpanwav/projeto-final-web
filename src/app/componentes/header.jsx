import React from 'react'
import styles from "../page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { openDb } from '@/lib/database';


export default async function Header() {
  const db = await openDb();
  return (
    <div>
      <div className="text-center row">
            <nav className="nav col justify-content-center align-items">
                <a href="/login">Login</a>
            </nav>
            <div className="col-6">
                <img className="img-fluid" src={'/imagens/kessokudinner.jpeg'} alt="Kessoku Band jantando"></img>
            </div>
            <div className="col">
                <input type="text" placeholder="O que procura?"></input>
                <button>Pesquisar</button>
            </div>
        </div>
        <nav className="nav justify-content-center align  -items">
            <a className="nav-link" aria-current="page" href="">Página Inicial</a>
            <a className="nav-link" href="#">Sobre Nós</a>
            <a className="nav-link" href="#">Atendimento e FAQ</a>
        </nav> 
        <main className="container text-center">
        </main>
    </div>
  );
}