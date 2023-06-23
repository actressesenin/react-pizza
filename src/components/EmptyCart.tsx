import React from 'react';
import { Link } from 'react-router-dom';
import emptyCartPNG from '../assets/img/empty-cart.png';

const EmptyCart: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Корзина пустая <span>😕</span>
      </h2>
      <p>
        Вероятней всего, вы ещё не заказывали пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={emptyCartPNG} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Вернуться на главную</span>
      </Link>
    </div>
  );
};

export default EmptyCart;
