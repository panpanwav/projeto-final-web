const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

async function setup() {
  const db = await open({
    filename: './loja.db',
    driver: sqlite3.Database,
  });

  await db.exec('PRAGMA foreign_keys = ON');

  await db.exec(`
    CREATE TABLE IF NOT EXISTS produtos (
      ProdutoID INTEGER PRIMARY KEY AUTOINCREMENT,
      ProdutoNome TEXT,
      ProdutoPreco REAL,
      ProdutoDescricao TEXT,
      ProdutoImagemURL TEXT,
      Estoque INTEGER
    )
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS usuarios (
      UsuarioID INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT,
      senha TEXT,
      endereco TEXT
    )`);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS pedidos (
      PedidoID INTEGER PRIMARY KEY AUTOINCREMENT,
      UsuarioID INTEGER,
      FOREIGN KEY (UsuarioID) REFERENCES usuarios(UsuarioID)
    )
  `);
  db.run(`
      INSERT INTO produtos (ProdutoNome, ProdutoDescricao, ProdutoImagemURL)
      VALUES
      ('Guitarra Les Paul', 'Slash neles', '/imagens/lespaul.jpeg'),
      ('Guitarra Stratocaster','Classica e sem erro','/imagens/strato.jpg'),
      ('Guitarra Flying V','Estilo puro','/imagens/flyV.jpg')
    `);
}
setup();