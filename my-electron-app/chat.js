import { enviarPergunta } from './openaiAPI.js';



export async function chat() {
    const input = document.getElementById('userInput')
    const chat = document.getElementById('chat')

    if (input.value.trim() !== '') {
        //adiciona mensagem do usuario
        const novaMensagem = document.createElement('li')
        novaMensagem.textContent = input.value
        chat.appendChild(novaMensagem)


        //guarda o texto e limpa o input
        const pergunta = input.value
        input.value = ''
        chat.scrollTop = chat.scrollHeight;

        //chama a api e espera a resposta
        const respostaIA = await enviarPergunta(pergunta)

        //Adiciona resposta da IA
        const resposta = document.createElement('li')
        resposta.textContent = respostaIA
        chat.appendChild(resposta)
        chat.scrollTop = chat.scrollHeight;

    }
}

window.chat = chat;
