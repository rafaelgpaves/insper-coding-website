import { useState } from 'react';
import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import CarouselComponent from './CarouselComponent';

import cloud_icon from './assets/imgs/cloud.png';
import data_icon from './assets/imgs/dados.png';
import apps_icon from './assets/imgs/apps.png';
import games_icon from './assets/imgs/games.png';
import web_icon from './assets/imgs/web.png';
import ia_icon from './assets/imgs/ia.png';


import insper from './assets/imgs/logos/insper.png';
import inhealth from './assets/imgs/logos/inhealth.png';
import fundacao from './assets/imgs/logos/fundacao.png';
import insperdata from './assets/imgs/logos/insperdata.png';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const logosSlide = document.querySelector(".logos-slide");
    if (logosSlide) {
      const copy = logosSlide.cloneNode(true);
      document.querySelector(".logos").appendChild(copy);
    }
  }, []); // O array vazio significa que o efeito será executado apenas uma vez, após a montagem

  return (
    <>
      <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>
      <div className='titulo'>
          <h1>A primeira entidade focada em projetos externos do Brasil</h1>
      </div>

      <div className='cultura_titulo'> 
          <h2>Nossa Cultura</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque molestie leo, non pretium massa. Phasellus nibh magna, ultricies in leo sed, tempor malesuada libero. Nulla vehicula, mauris id scelerisque placerat, odio mi pellentesque purus, eu dignissim tellus odio non lorem.</p>
      </div>

      <div>
        <Box sx={{ width: '100%' }}>
          <Grid container columnSpacing={10}>
            <Grid size={4}>
              <h3 className = 'valores'>Valores</h3>
              <hr className='line'></hr>
              <body className='valores_texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque molestie leo, non pretium massa. Phasellus nibh magna, ultricies in leo sed, tempor malesuada libero.Donec ut suscipit turpis. Aenean elit tortor, scelerisque eu pretium at, facilisis ut lorem.</body>
              
            </Grid>
            <Grid size={4}>
  
              <h3 className = 'valores'>Visão</h3>
              <hr class='line'></hr>
              <body className='valores_texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque molestie leo, non pretium massa. Phasellus nibh magna, ultricies in leo sed, tempor malesuada libero.Donec ut suscipit turpis. Aenean elit tortor, scelerisque eu pretium at, facilisis ut lorem.</body>
              

            </Grid>
            <Grid size={4}>
              <h3 className = 'valores'>Missão</h3>
              <hr class='line'></hr>
              <body className='valores_texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque molestie leo, non pretium massa. Phasellus nibh magna, ultricies in leo sed, tempor malesuada libero.Donec ut suscipit turpis. Aenean elit tortor, scelerisque eu pretium at, facilisis ut lorem.</body>
              

            </Grid>
          </Grid>
        </Box>
      </div>

      <hr className='division'></hr>


      <div>
        <Box sx={{ width: '100%' }}>
          <Grid container columnSpacing={10}>
            <Grid size={5}>
              <h2 className='servicos_titulo'>Nossos Serviços</h2>
              <body className='servicos_texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque molestie leo, non pretium massa. Phasellus nibh magna, ultricies in leo sed, tempor malesuada libero.Donec ut suscipit turpis. Aenean elit tortor, scelerisque eu pretium at, facilisis ut lorem.</body>
            </Grid>
              <Grid size={7}>
              <div className='servicos'>
                <Box sx={{ width: '100%' }}>
                <Grid container spacing={6}>

                  <Grid size={6}>
                    <div className='servico_item'>
                      <img src={web_icon} className='servico_icon' />
                      Desenvolvimento Web
                    </div>
                  </Grid>
                  <Grid size={6}>
                    <div className='servico_item'>
                      <img src={data_icon} className='servico_icon' />
                      Análise de Dados
                    </div>
                  </Grid>
                  <Grid size={6}>
                    <div className='servico_item'>
                      <img src={ia_icon} className='servico_icon' />
                      Inteligência Artificial
                    </div>
                  </Grid>
                  <Grid size={6}>
                    <div className='servico_item'>
                      <img src={apps_icon} className='servico_icon' />
                      Aplicativos
                    </div>
                  </Grid>
                  <Grid size={6}>
                    <div className='servico_item'>
                      <img src={cloud_icon} className='servico_icon' />
                      Cloud
                    </div>
                  </Grid>
                  <Grid size={6}>
                    <div className='servico_item'>
                      <img src={games_icon} className='servico_icon' />
                      Jogos
                    </div>
                  </Grid>
                </Grid>
                </Box>

              </div>
              </Grid>
            </Grid>
        </Box>
      </div>
      <hr className='division'></hr>
      
      <div className='parceiros_titulo'> 
          <h2>Nossos Parceiros</h2>
      </div>  

      <hr className='division_slide_up'></hr>
      <div className='parceiros_texto'>
        <div className="logos">
          <div className="logos-slide">
            <img src={insper} alt="Insper Logo" />
            <img src={inhealth} alt="InHealth Logo" />
            <img src={fundacao} alt ="Fundação Logo" />
            <img src={insperdata} alt ="InsperData Logo" />
          </div>

        </div>
      </div>
      <hr className='division_slide_down'></hr>
      <hr className='division'></hr>
      <div className='parceiros_titulo'> 
          <h2>Cases de Sucesso</h2>
      </div>  
      <CarouselComponent />

    </>
  );
}

export default App;

