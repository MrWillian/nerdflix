import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import dadosIniciais from './data/dados_iniciais.json';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Menu />
      
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O painel de Bill & Ted na San Diego Comic-Con contou com novidades e, agora, Patrícia Gomes, Fábio Gomes e Marcelo Hessel comentam o que esperar do longa. Confira!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo={false}
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo={false}
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo={false}
        category={dadosIniciais.categorias[3]}
      />

      <Footer />

    </div>
  );
}

export default App;
