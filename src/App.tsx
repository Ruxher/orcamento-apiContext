import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./routes/Home"
import { useState } from "react"

function App() {
  const [ services, setSercices ] = useState([
    {
      'service': 'Pintura de Parede',
      'type': 'Pintura',
      'img': 'https://blog.cassol.com.br/wp-content/uploads/2024/03/como_preparar_a_parede_para_pintura_07-1024x684.jpg'
    },
    {
      'service': 'Masseamento',
      'type': 'Pintura',
      'img': 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2018/07/31/como-emassar-parede-foto-better-media.jpg'
    },
    {
      'service': 'Textura',
      'type': 'Pintura',
      'img': 'https://blog.cassol.com.br/wp-content/uploads/2024/04/tipos_de_textura_para_parede_09-1024x682.jpg'
    },
    {
      'service': 'Pintura de Madeira com Verniz',
      'type': 'Pintura',
      'img': 'https://www.zapimoveis.com.br/blog/wp-content/uploads/2024/06/envernizar-madeira-crua-609x406.jpg.webp'
    },
    {
      'service': "Limpeza de Caixa D'Água",
      'type': 'Hidráulica',
      'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Syq7Kwt4n2zjPRV668wZ3oWRTRkSHKw764Ag34hxFb1AlkXHVYBcPooU&s=10'
    },
    {
      'service': "Desentupimento",
      'type': 'Hidráulica',
      'img': 'https://www.fortalezadesentupidora.com/wp-content/uploads/2018/05/desentupimento-pia.jpg'
    },
    {
      'service': "Instalação de Torneiras",
      'type': 'Hidráulica',
      'img': 'https://dunard.cdn.magazord.com.br/img/2023/12/blog/8662/instalando-torneira.jpg'
    },
    {
      'service': "Vazamento",
      'type': 'Hidráulica',
      'img': 'https://www.saaebandeirantes.com.br/admin/globalarq/noticia/noticia/651_366/cd43341b64cb2048047e089a10cf1dce.jpeg'
    },
    {
      'service': "Lampada Queimada",
      'type': 'Elétrica',
      'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD2VZzzFzWArhQxQ_HKRUtAIuKyAGpjWsBhFlwzgbya6kfY-7z8oxVgH4&s=10'
    },
    {
      'service': "Tomada Queimada",
      'type': 'Elétrica',
      'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHyXfkWb9CQb0JL_ih9Qn8VQV7aal7mxJbM1W1yJpUtGBKy75kEYxTbWi&s=10'
    },
    {
      'service': "Instalação de Luminaria",
      'type': 'Elétrica',
      'img': 'https://www.datocms-assets.com/29255/1718132352-instalando-luminaria-de-teto.jpg'
    },
    {
      'service': "Resistência de Chuveiro",
      'type': 'Elétrica',
      'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-zrk6B3HoEQEi-8pK5ID86tB2CikngjE4WRr-HwWI7qQeFxgfbQqMTQ&s=10'
    },
    {
      'service': "Instalar Painel para TV",
      'type': 'Reparos',
      'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrWdHa6XFDV9yOg6B5zW9G1-mYO4JPhNlw25_Uo2tFEL5He961u9InkUQ&s=10'
    },
    {
      'service': "Instalar Ar-Condicionado",
      'type': 'Reparos',
      'img': 'https://www.produttivo.com.br/blog/wp-content/uploads/2021/11/como-instalar-ar-condicionado.jpg'
    },
    {
      'service': "Instalar Prateleira",
      'type': 'Reparos',
      'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaEUFQ9rZcBTwbGbzbgoAdCDbbIGpqwtRBaAFJyztwOlNtnIchDgG7a8o&s=10'
    },
    {
      'service': "Instalar Fechadura",
      'type': 'Reparos',
      'img': 'https://casanova.cdn.magazord.com.br/img/2023/12/blog/4668/como-instalar-fechaduras-passo5-e-6.png'
    },
  ])

  return (
    <section>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home services={services} />} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App
