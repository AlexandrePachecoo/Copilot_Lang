import OpenAI from "openai";
const client = new OpenAI();

export async function enviarPergunta(pergunta) {

    const instructions = await carregarPrompt();

    const response = await client.responses.create({
        model: "gpt-4.1",
        instructions,
        input: pergunta,
    });

    return response;

}

async function carregarPrompt() {
  const resposta = await fetch('prompt.txt');
  const texto = await resposta.text();
  return texto;
}

