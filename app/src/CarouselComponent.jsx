import React, { useState } from 'react';
import { IconButton, Box, Typography, Paper } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import './Carousel.css';
import web_icon from './assets/imgs/web.png';
import data_icon from './assets/imgs/dados.png';
import ia_icon from './assets/imgs/ia.png';

const data = [
  {
    title: 'Desenvolvimento de Web',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque molestie leo, non pretium massa. Phasellus nibh magna, ultricies in leo sed, tempor malesuada libero. Nulla vehicula, mauris id scelerisque placerat, odio mi pellentesque purus, eu dignissim tellus odio non lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam ut lectus est. Nulla hendrerit venenatis quam, et facilisis est finibus non. Donec ut suscipit turpis. Aenean elit tortor, scelerisque eu pretium at, facilisis ut lorem.',
    imageUrl: data_icon,
  },
  {
    title: 'Análise de Dados',
    description: 'Lorem ipsum dolor sit amet pellentesque molestie leo, non pretium massa. Phasellus nibh magna, ultricies in leo sed, tempor malesuada libero. Nulla vehicula, mauris id scelerisque placerat, odio mi pellentesque purus, eu dignissim tellus odio non lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam ut lectus est. Nulla hendrerit venenatis quam, et facilisis est finibus non. Donec ut suscipit turpis. Aenean elit tortor, scelerisque eu pretium at, facilisis ut lorem.',
    imageUrl: web_icon,
  },
  {
    title: 'Inteligência Artificial',
    description: 'Lorem ipsum dolor sit amet pellentesque molestie leo, non pretium massa. Phasellus nibh magna, ultricies in leo sed, tempor malesuada libero. Nulla vehicula, mauris id scelerisque placerat, odio mi pellentesque purus, eu dignissim tellus odio non lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam ut lectus est. Nulla hendrerit venenatis quam, et facilisis est finibus non. Donec ut suscipit turpis. Aenean elit tortor, scelerisque eu pretium at, facilisis ut lorem.',
    imageUrl: ia_icon,
  },
  // Adicione mais objetos conforme necessário
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
      {/* Carrossel */}
      <Box display="flex" alignItems="center" justifyContent="center">
        <IconButton onClick={handlePrev} style={{ color: 'white' }}>
          <ArrowBackIos />
        </IconButton>

        <Paper elevation={3} style={{ padding: '20px', width: '920px', height: 
          '400px', display: 'flex', borderRadius: '40px', background: '#202327', boxShadow: '0 0 0' }}>
          <Box style={{ marginRight: '20px' }}>
            <img src={data[currentIndex].imageUrl} alt={data[currentIndex].title} style={{ width: '150px', height: '150px', background: 'black' }} />
          </Box>
          <Box>
            <div className='titulo_case'>
              <img src={data[currentIndex].imageUrl} alt={data[currentIndex].title} style={{
                width: '30px', height: '30px', marginRight: '20px', marginLeft: "20px"
              }} />
              <Typography variant="h6" style={{ fontSize: "15px", fontWeight:'bold', color:'white'}}>{data[currentIndex].title}</Typography>
            </div>
            <Typography variant="body1" style ={{color:'white'}}>{data[currentIndex].description}</Typography>
          </Box>
        </Paper>

        <IconButton onClick={handleNext} style={{ color: 'white' }}>
          <ArrowForwardIos />
        </IconButton>
      </Box>

      {/* Indicadores (Bolinhas) */}
      <Box display="flex" justifyContent="center" marginTop="20px">
        {data.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: currentIndex === index ? '#56BFBF' : '#2F5E5E',
              margin: '0 5px',
              cursor: 'pointer',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CarouselComponent;
