import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
      <div>
        <h1>{props.kurssi}</h1>
      </div>
    )
  }

const Sisalto = (props) => {
    return (
      <div>
        <Osa osa={props.osa[0]}/>
        <Osa osa={props.osa[1]}/>
        <Osa osa={props.osa[2]}/>
      </div>
    )
  }

const Osa = (props) => {
    return (
      <div>
        <p>{props.osa.nimi} {props.osa.tehtavia}</p>
      </div>
    )
  }

const Yhteensa = (props) => {
    return (
      <div>
        <p>Yhteensä {props.tehtavat[0].tehtavia 
            + props.tehtavat[1].tehtavia
            + props.tehtavat[2].tehtavia} tehtävää</p>
      </div>
    )
  }

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osat = [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  ]


  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osa={osat} />
      <Yhteensa tehtavat={osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
