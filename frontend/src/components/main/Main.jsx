import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
const Main = () => {
    const [advantagesData, setAdvantagesData] = useState([]);
    useEffect(() => {
        // Выполнение запроса при загрузке компонента
        fetchAdvantagesData();
      }, []);
    
      const fetchAdvantagesData = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/advantages/?format=json');
          setAdvantagesData(response.data);
        } catch (error) {
          console.error('Error fetching advantages data:', error);
        }
      };
      const handleUpdateClick_Advatntage = () => {
        fetchAdvantagesData();
      };
  return (
    <div>
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <h1>Путешествие</h1>
                        <p className='red'>на красную планету</p>
                        <button>Начать путешествие</button>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 boxes">
                        <div className="wrapper">
                            {advantagesData.map((item, index) => (
                            <div className="info" key={index}>
                                <p>{item.first}</p>
                                <h2>{item.second}</h2>
                                <p>{item.third}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Main