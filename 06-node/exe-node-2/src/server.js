import cors from "cors";
import express from "express";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname + "/pages")));
app.use(cors());

app.post("/contato", (req, res) => {
  const { name, email, telefone, mensagem } = req.body;

  const resposta = {
    name,
    email,
    telefone,
    mensagem,
  };

  console.log(resposta);

  return res.json(resposta);
});

app.listen(3333, () => {
  console.log("No ar http://localhost:3333 🔥🔥🚒");
});
