import React from 'react'
import styles from "../page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../componentes/header";
import { openDb } from '@/lib/database';

export default function Login() {
  return (
    <div>
      <header/>
      <div class="input-group mb-3" id="email">
        <input type="text" class="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon1"/>
      </div>
      <div class="input-group mb-3" id="senha">
        <input type="text" class="form-control" placeholder="senha" aria-label="senha" aria-describedby="basic-addon1"/>
      </div>
      <button type="button" class="btn btn-primary" id="botaoAuth">Primary</button>
    </div>
  );
}