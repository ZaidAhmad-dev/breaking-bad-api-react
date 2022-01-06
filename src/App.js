
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CharacterGrid from './components/characters/CharacterGrid';
import Header from './components/ui/Header';
import Search from './components/ui/Search';

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setItems(response.data);
      setIsLoading(false);

    }
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header/>
      <Search getQuery={
        (q) => {
          setQuery(q);
          setIsLoading(true);
        }
      }/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
