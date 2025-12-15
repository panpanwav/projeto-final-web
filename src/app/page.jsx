import React from 'react'
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./componentes/header";
import { openDb } from '@/lib/database';
import CardProduto from './componentes/produtos';


export default async function Home() {
  const db = await openDb();
  const listaProdutos = await db.all('SELECT * FROM produtos')
  console.log(listaProdutos);
  return (
    <div>
      <Header/>
      <CardProduto listaProduto={listaProdutos}/>
    </div>
  );
}