function chat(){
    const input = document.getElementById('userInput')
    const chat = document.getElementById('chat')

        if(input.value.trim() !== ''){
            const novaMensagem = document.createElement('li')
            novaMensagem.textContent = input.value 
            chat.appendChild(novaMensagem)
            input.value = ''
            chat.scrollTop = chat.scrollHeight;
        }
}