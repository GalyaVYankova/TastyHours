import React from 'react';
import './Navigation.css';
import Link from '../shared/Link/Link';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar } from 'react-bootstrap'

function Navigation({ isLogged }) {
  return <div>
    <Navbar className="pink" variant="dark">
      <Navbar.Brand href="/"><p>Tasty</p> <p>Hours</p></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Новини</Nav.Link>
        {isLogged && <Nav.Link href="/gallery"><p>Галерия</p></Nav.Link>}
        {isLogged && <Nav.Link href="/recipes">Рецепти</Nav.Link>}
        {isLogged && <Nav.Link href="/create-posts">Админ Постове</Nav.Link>}
        {isLogged && <Nav.Link href="/orders">Поръчки</Nav.Link>}

        <div className="navigation-right">
          {!isLogged && <Nav.Link href="/register">Регистрация</Nav.Link>}
          {!isLogged && <Nav.Link href="/login">Вход</Nav.Link>}
          {isLogged && <Nav.Link href="/logout">Изход</Nav.Link>}
        </div>
      </Nav>
    </Navbar>
  </div>
};

export default Navigation;