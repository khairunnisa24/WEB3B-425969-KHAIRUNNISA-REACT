import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Card } from 'antd';
import logo from './logo.svg';
import './App.css';
const { Header, Content, Footer } = Layout;

const cardData = [
  {
    nama : "Rizky Nazar",
    job : "Artist",
    telephone : "082160306248",
  },
  {
    nama : "Syifa Hadju",
    job : "Singer",
    telephone : "082280564257",
  },
  {
    nama : "Nabila Gardena",
    job : "Content Creator",
    telephone : "082190673456",
  },
  {
    nama : "Putri Ayudia",
    job : "Entrepreneur",
    telephone : "081378563420",
  },
  {
    nama : "Bryan Adam",
    job : "Comedian",
    telephone : "081109452937",
  },
]

function App() {
  return (
    <div className="App">
      {cardData.map(data => (
        <Card title="Id Card" style={{ width: 500 }}>
          <p className="name"><u>{data.nama}</u></p>
          <p className="job">{data.job}</p>
          <p>{data.telephone}</p>
        </Card>
      ))}
    </div>
  );
}

export default App;