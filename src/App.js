/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Element from './components/element';
import Details from './components/details';
import Search from './components/search';
import { getAllVideos } from './apis/apis';

function App() {
  const [step, setStep] = useState(false);
  const [item, setItem] = useState({});
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  useEffect(() => {
    const getAllData = async () => {
      const d = await getAllVideos(name);
      // console.log('d ', d);
      setData(d.Search);
    }
    getAllData();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(name);
      const d = await getAllVideos(name);
      // console.log('d ', d);
      setData(d.Search);
  }
  return (
    <div className="app">
      <Header />
      <div>
        <Search value={name} setName={setName} handleSearch={handleSearch}/>
      </div>
      <div>
      {step ? <Details item={item} setStep={setStep}/> : data.length === 0 ? <p>No data found!</p>: data.map((v, i) => <Element key={i} setStep={setStep} setItem={() => setItem(v)} item={v}/>)}
      </div>
    </div>
  );
}

export default App;
