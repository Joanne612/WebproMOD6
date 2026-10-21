import { Fragment, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const nama = "Joanne"
  const color = {color: "#1F3A5F"}
  const jam = 9

  return (
    <>
      <h1 className='Judul' style={color}> Kantin {nama} </h1>
        {jam ? 'Selamat pagi' : 'Selamat siang'}
      <p>
        Saldo awal kartu kantin: Rp {14*1000}
      </p>
      <button className='bayar' disabled>Bayar</button>
    </>
  )
}

export default App
