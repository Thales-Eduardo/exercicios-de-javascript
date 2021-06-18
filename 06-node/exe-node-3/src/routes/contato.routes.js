import { Router } from "express";

const Contato = Router();

Contato.post("/", (req, res) => {
  try {
    const { name, email, telefone, mensagem } = req.body;

    const resposta = {
      name,
      email,
      telefone,
      mensagem,
    };

    console.table([resposta]);

    return res.json(resposta);
  } catch (error) {
    return res.json({ error: "Erro no envio!" });
  }
});

export default Contato;
