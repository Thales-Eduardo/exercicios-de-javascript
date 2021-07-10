import express from "express";
import { v4 as uuid } from "uuid";

const app = express();

app.use(express.json());

const produtos = [];

app.get("/produtos", (req, res) => {
  const results = produtos.map((valores) => valores);
  return res.json(results);
});

app.post("/produtos", (req, res) => {
  const { name, preco } = req.body;
  const produto = { id: uuid(), name, preco };

  produtos.push(produto);

  return res.json(produtos);
});

app.put("/produtos/:id", (req, res) => {
  const { id } = req.params;
  const { name, preco } = req.body;

  const produtoIndex = produtos.findIndex((produtos) => produtos.id === id);

  if (produtoIndex < 0) {
    return res.status(400).json({ erro: "Deu erro" });
  }

  produtos[produtoIndex] = {
    id,
    name: name ? name : produtos[produtoIndex].name,
    preco: preco ? preco : produtos[produtoIndex].preco,
  };

  const produto = { id, name, preco };
  return res.json(produto);
});

app.delete("/produtos/:id", (req, res) => {
  const { id } = req.params;
  const produtoIndex = produtos.findIndex((produtos) => produtos.id === id);

  if (produtoIndex < 0) {
    return res.status(400).json({ erro: "Deu erro" });
  }

  produtos.splice(produtoIndex, 1);
  return res.send();
});

app.listen(3333, () => {
  console.log("no ar http://localhost:3333 🔥🔥🚒");
});
