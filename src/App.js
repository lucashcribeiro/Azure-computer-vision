import React, { useState } from 'react';
import './App.css';

const URLAPI = `/api`

function App() {


  const [data, setData] = useState()

  const [image, setImage] = useState('https://as2.ftcdn.net/v2/jpg/02/10/41/89/1000_F_210418965_glEl6U09BYJHBTMabVbndp2BpDLqtN0Q.jpg')

  const handleOnChange = event => {
    setImage(event.target.value)
  }

  const handleClickImage = async event => {
    event.preventDefault()
    console.log('click')
    try {
      const fetchOptions = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: image,
        })
      }

      const resp = await fetch(`${URLAPI}/describe`, fetchOptions)
      const resDescrip = await resp.json()
      console.log(resDescrip.data)
      setData(resDescrip.data)
    } catch (err) {
      console.error(err)
    }
  }

  const handleVoiceIt = async event => {
    event.preventDefault()
    console.log('click')
    try {
      const utterance = new SpeechSynthesisUtterance(data.description.captions[0].text)
      utterance.lang = 'pt-Br'
      utterance.rate = 0.8
      speechSynthesis.speak(utterance)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Azure Vision FIAP!
        </p>

        <p>
          URL da Imagem:
        </p>
        <div className="containerFile">
          <input
            className="inputFile"
            placeholder="Upload image"
            onChange={handleOnChange}
            value={image} style={{ width: "450px" }}
          />
          <button
            className="buttonFile"
            onClick={handleClickImage}
          >
            clicar
          </button>
        </div>
        {data && data.description && data.description.tags && <span> *** Caso queira em portugues apenas clicar com o botão direito e traduzir o resultado <br>
        </br>Itens encontrados:  {data.description.tags.join(" ")}</span>}
        <h4 className="titleAtribute">Resultado analisado</h4> 
        <ul>
          {
            data && data.description && data.description.captions && data.description.captions.map(item => (
              <li key={item.text}>
                <span>
                  {item.text} - Confidence level {parseInt((item.confidence * 100))}%
                </span>
                <button
                  className="buttonFile"
                  onClick={handleVoiceIt}
                >
                  Escute!
                </button>
              </li>
            ))
          }
        </ul>
        <img
          src={image}
          width={220}
          height={180}
          alt={image}
        />
        Link da imagem escolhida <a
          className="App-link"
          href={image}
          target="_blank"
          rel="noopener noreferrer"
        >
          {image}
        </a>
      </header>
    </div>
  );
}

export default App;
