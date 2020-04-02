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
          <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => this.setState({currentPage: 0})}>Home</button>
          <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => this.setState({currentPage: 1})}>About</button>
          <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => this.setState({currentPage: 2})}>Projects</button>
          <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => this.setState({currentPage: 3})}>Contact</button>
          <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => this.setState({currentPage: 4})}>Resources</button>
          <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => this.setState({currentPage: 5})}>Fun</button>
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
      <div>"Fun Stuff"</div>)
  }
}

class Fun extends React.Component{

  render(){
    return(
      <div>"Fun Stuff"</div>)
  }
}


ReactDOM.render(<DahliaApp />, document.getElementById('root'))
