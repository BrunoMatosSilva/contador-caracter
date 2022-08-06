import { Keyboard } from "phosphor-react"
import { useState } from "react"

import './styles/app.css'

function App() {
  const [text, setText] = useState('')
  
  async function updateCaracteres(e){
    const caracteres = e.target.value
    setText(caracteres)
  }

  return (
    <div className="container">
      <header className="header-container"><Keyboard /> Contagem de Caracteres</header>
      <h2>Contador de Caracteres e Contador de Palavras, online e gratuito!</h2>
      <p>O Contador de Caracteres é uma ferramenta muito simples: ele simplesmente conta caracteres e palavras em um texto. Basta você ir digitando o texto no box e o Contador de Caracteres vai te mostrando, em tempo real, a contagem de palavras e caracteres do seu texto. Se preferir, você também pode copiar e colar do Bloco de Notas (ou do seu Editor de Texto predileto) algum texto que você já tenha escrito para visualizar a contagem de caracteres e palavras.</p>
      <textarea
      type="textarea" 
      name="textarea" 
      id="textarea" 
      value={text}
      onChange={updateCaracteres}
      placeholder="Digite ou cole o que deseja contar" 
      onClick={() => contaCaracteres(text)}
      />
      <section className="length-container">
        <p>contagem de caracteres:</p><span>{text.length}</span>
      </section>
    </div>
  )
}

export default App
