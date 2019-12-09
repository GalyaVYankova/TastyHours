import React from 'react';
import './Navigation.css';
import Link from '../shared/Link/Link';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, Navbar } from 'react-bootstrap'

function Navigation({ isLogged }) {
  return <div>
    <Navbar className="pink" variant="dark">
          <Nav.Link href="/"><div className="nav-label">Tasty</div> <div className="nav-label">Hours</div></Nav.Link>
          <Nav.Link href="/"><p>Новини</p></Nav.Link>
          {isLogged && <Nav.Link href="/gallery"><p>Галерия</p></Nav.Link>}
          {isLogged && <Nav.Link href="/recipes"><p>Рецепти</p></Nav.Link>}
          {isLogged && <Nav.Link href="/create-recipes"><p>Публикувай</p></Nav.Link>}
        <div className="navigation-right">
          {!isLogged && <Nav.Link href="/register"><p>Регистрация</p></Nav.Link>}
          {!isLogged && <Nav.Link href="/login"><p>Вход</p></Nav.Link>}
          {isLogged && <Nav.Link href="/logout"><p>Изход</p></Nav.Link>}
        </div>
    </Navbar>
  </div>
};

export default Navigation;