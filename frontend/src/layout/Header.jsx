function Header() {
    return <div>
        <nav className='grey darken-4' >
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo">Фильмы</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="sass.html">Новое</a></li>
        <li><a href="badges.html">Подборка</a></li>
        <li><a href="collapsible.html">Рейтинг</a></li>
      </ul>
      <ul className="right hide-on-med-and-down">
          <li><a href="mobile.html">Вход</a></li>
      </ul>
      
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
    </div>
}

export {Header}