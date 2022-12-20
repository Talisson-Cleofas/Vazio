
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Estado from './componentes/Estados';
import Rodape from './componentes/Rodape';



function App() {

  const estados = [
    {
      nome: 'São Paulo - SP',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome: 'Goiás - GO',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF',
    },
    {
      nome: 'Minas Gerais - MG',
      corPrimaria:'#A6D157',
      corSecundaria:'#FDE7E8'
    },
    {
      nome: 'Acre - AC',
      corPrimaria:'#57C278',
      corSecundaria:'#FFF5D9'
    },
    {
      nome: 'Alagoas - AL',
      corPrimaria:'#82CFFA',
      corSecundaria:'#FFEEDF'
    },
    {
      nome: 'Amapá - AP',
      corPrimaria:'#A6D157',
      corSecundaria:'#D9F7E9'
    },
    {
      nome: 'Amazonas - AM',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#F0F8E2'
    },
    {
      nome: 'Bahia - BA',
      corPrimaria:'#57C278',
      corSecundaria:'#FAE9F5'
    },
    {
      nome: 'Ceará - CE',
      corPrimaria:'#82CFFA',
      corSecundaria:'#FFF5D9'
    },
    {
      nome: 'Espírito Santo - ES',
      corPrimaria:'#A6D157',
      corSecundaria:'#FFEEDF'
    },
    {
      nome: 'Maranhão - MA',
      corPrimaria:'#E06B69',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Mato Grosso - MT',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Mato Grosso do Sul - MS',
      corPrimaria:'#FFBA05',
      corSecundaria:'#F0F8E2'
    },
    {
      nome:'Pará - PA',
      corPrimaria:'#82CFFA',
      corSecundaria:'#FAE9F5'
    },
    {
      nome:'Paraíba - PB',
      corPrimaria:'#A6D157',
      corSecundaria:'#FFF5D9'
    },
    {
      nome:'Paraná - PR',
      corPrimaria:'#E06B69',
      corSecundaria:'#FFEEDF'
    },
    {
      nome:'Pernambuco - PE',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Piauí - PI',
      corPrimaria:'#FFBA05',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Rio de Janeiro - RJ',
      corPrimaria:'#FF8A29',
      corSecundaria:'#F0F8E2'
    },{
      nome:'Rio Grande do Norte - RN',
      corPrimaria:'#57C278',
      corSecundaria:'#FAE9F5'
    },
    {
      nome:'Rio Grande do Sul - RS',
      corPrimaria:'#82CFFA',
      corSecundaria:'#FFF5D9'
    },
    {
      nome: 'Rondônia - RO',
      corPrimaria:'#A6D157',
      corSecundaria:'#FFEEDF'
    },
    {
      nome:'Roraima - RR',
      corPrimaria:'#E06B69',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Santa Catarina - SC',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Sergipe - SE',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FDE7E8'
    },
    {
      nome: 'Tocantins - TO',
      corPrimaria:'#57C278',
      corSecundaria:'#FAE9F5'
    },
    {
      nome:'Distrito Federal - DF',
      corPrimaria:'#82CFFA',
      corSecundaria:'#FFF5D9'
    }
  ]
  const [hotels, setHotel] =useState([])
 

  const aoNovoHotelAdicionado = (hotel) => {
    setHotel ([...hotels, hotel])
   
  }

  return (
    <div className="App">
      < Banner />
      <Formulario estados={estados.map(estado => estado.nome)} 
      aoHospedeCadastrado = {hotel => aoNovoHotelAdicionado (hotel)}
      
      />
      
      {estados.map(estado => <Estado 
      key={estado.nome} 
      nome={estado.nome} 
      corPrimaria={estado.corPrimaria}
      corSecundaria={estado.corSecundaria}
      hotels={hotels.filter(hotel => hotel.estado == estado.nome)}
      
      />)}

      <Rodape/>

      


    </div>
  );
}

export default App;
