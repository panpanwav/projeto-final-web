import React from 'react'
import styles from "../page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { openDb } from '@/lib/database'

export default function CardProduto ({listaProduto = []}) {
    return (
            <div className="row justify-content-center">
            {listaProduto.map(
                (produto) => (
                    <div key={produto.ProdutoID} className='card col-sm-6 mx-3'>
                        <img src={produto.ProdutoImagemURL} className="card-img-top"></img>
                        <div className='card-body'>
                            <h5>
                                {produto.ProdutoNome}
                            </h5>   
                            <p className='card-text'>{produto.ProdutoDescricao}</p>
                            <a href='#' className='btn btn-primary'>Compre Aqui!</a>
                        </div>
                    </div>
                )
            )}
            </div> 
    )
}