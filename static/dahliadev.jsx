class DahliaApp extends React.Component{
  constructor(props) {
    super(props)
    this.state = { currentPage: 0,
                    pages : [<HomePage />,
                            <About />,
                            <Projects  />,
                            <Contact />,
                            <Resources />,
                            <Fun />
                            ]
                  }
  }

  render() {
    return (
      <div>
          <div className="row">
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
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
          <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => this.setState({currentPage: 1})}>About</button>
        </li>
        <li className="nav-item">
          <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => this.setState({currentPage: 2})}>Projects</button>
        </li>
        <li className="nav-item">
          <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => this.setState({currentPage: 3})}>Contact</button>
        </li>
        <li className="nav-item">
          <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => this.setState({currentPage: 4})}>Resources</button>
        </li>
        <li className="nav-item">
          <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => this.setState({currentPage: 5})}>Fun</button>
        </li>
      </ul>
    </div>
    </nav>
    </div>
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
      <div>"Welcome to Dahlia's Developer Site"</div>)
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

class Resources extends React.Component{
  render(){
    return(
      <div>"Resources"</div>)
  }
}

class Fun extends React.Component{

  render(){
    return(
      <div>"Fun Stuff"</div>)
  }
}


ReactDOM.render(<DahliaApp />, document.getElementById('root'))
