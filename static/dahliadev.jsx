class DahliaApp extends React.Component{
  constructor(props) {
    super(props)
    this.state = { currentPage: 0,
                    pages : [<HomePage />,
                            <About />,
                            <Projects  />,
                            <Contact />,
                            <Fun />
                            ]
                  }
  }

  render() {
    return (
      <div>
      <nav className="navbar sticky-top navbar-expand-md bg-light navbar-light">
        <a className="navbar-brand" href="">Dahlia Kadri</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
          </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="btn btn-sm btn-outline-success" type="button" onClick={() => this.setState({currentPage: 0})}>Home</button>
        </li>
        <li className="nav-item">
          <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => this.setState({currentPage: 1})}>About Me</button>
        </li>
        <li className="nav-item">
          <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => this.setState({currentPage: 2})}>Projects</button>
        </li>
        <li className="nav-item">
          <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => this.setState({currentPage: 3})}>Contact</button>
        </li>
        <li className="nav-item">
          <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => this.setState({currentPage: 4})}>Fun</button>
        </li>
      </ul>
    </div>
    </nav>
        <div className="row">
          {this.state.pages[this.state.currentPage]}
        </div>
      </div>
            )
  }
}

class HomePage extends React.Component{
  render(){
    return(
      <div className="row no-gutters justify-content-center">
      <div className="col-md-6">
      Hi! I'm Dahlia and a full stack software engineer. I live in the San Francisco Bay Area and work in the security engineering team at Box.
      I am originally from New York with roots in Egypt in Ireland. Previous work includes program associate for Microsoft in Cairo, Egypt, where I supported computer science programs for public school students.
      in Egypt in Ireland. You can find my professional work, travel escapades, and my personal software/life hacks on this site.</div>
      <div className="col-md-6">
      <img src="/static/img/dahliakadri.jpg" className="card-img" alt="Poster"/></div>
      </div>)
  }
}

class About extends React.Component{

  render(){
    return(
      <div>"About Dahlia"</div>)
  }
}

class Projects extends React.Component{

  render(){
    return(
      <div>"Dahlia's Projects"</div>)
  }
}

class Contact extends React.Component{

  render(){
    return(
      <div>"Dahlia's Contact"</div>)
  }
}


class Fun extends React.Component{

  render(){
    return(
      <div>"Fun Stuff"</div>)
  }
}


ReactDOM.render(<DahliaApp />, document.getElementById('root'))
