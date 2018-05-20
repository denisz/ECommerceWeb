import React from 'react';
import Link from 'components/Link';
import BurgerMenu from 'react-burger-menu';
import './Menu.css';

const menus = [
  {
    title: 'Магазин',
    route: '/',
  },
  {
    title: 'Статистика',
    route: '/admin/dashboard',
  },
  {
    title: 'Заказы',
    route: '/admin/orders',
  },
  {
    title: 'Поиск',
    route: '/admin/search',
  },
  {
    title: 'Партии',
    route: '/admin/batches',
  },
  {
    title: 'Склад',
    route: '/admin/accounting',
  },
  {
    title: 'Команды',
    route: '/admin/commands',
  },
  {
    title: 'Выход',
    route: '/admin/logout',
  },
];

const Menu = BurgerMenu['slide'];

export default ({children}) => (
    <div id="outer-container" className="Menu">
      <Menu
          width={230}
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
      >
        {
          menus.map((i, idx) => (
              <Link key={idx} className="Menu__nav_item" to={i.route}>
                <span>{i.title}</span>
              </Link>
          ))
        }
      </Menu>
      <div className="Menu__main" id="page-wrap">
        <div className="Menu__fixed">
          <div className="Menu__brand">Dark Waters</div>
          <div className="Menu__nav">
            {
              menus.map((i, idx) => (
                  <Link key={idx} className="Menu__nav_item" to={i.route}>
                    <span>{i.title}</span>
                  </Link>
              ))
            }
          </div>
        </div>
        {children}
      </div>
    </div>
)
