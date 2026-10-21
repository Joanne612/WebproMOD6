import { Fragment, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import KartuMenu from './components/KartuMenu'
import Panel from './components/Panel'

function App() {
  const N = 14
  const nama = "Joanne"
  const color = {color: "#1F3A5F"}
  const jam = 9

  return (
    <>
      <h1 className='Judul' style={color}> Kantin {nama} </h1>
        {jam < 12 ? 'Selamat pagi' : 'Selamat siang'}
      <p>
        Saldo awal kartu kantin: Rp {N*1000}
      </p>
      <button className='bayar' disabled>Bayar</button>
      <Panel judul = "Menu Hari Ini">
        <KartuMenu nama={"Nasi Ayam Geprek"} harga={10000 + (N*100)}/>
        <KartuMenu nama={"Milk Tea"} harga={7000} kategori='Minuman'/>
        <KartuMenu nama={"Fish & Chips"} harga={65000}/>
      </Panel>
      
    </>
  )
}

export default App
