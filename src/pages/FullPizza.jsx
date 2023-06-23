import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://646675542ea3cae8dc1788a0.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Mistake occure!');
        navigate('/');
      }
    }
    fetchPizza();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!pizza) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="#" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
    </div>
  );
};

export default FullPizza;
