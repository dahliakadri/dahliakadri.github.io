class DahliaApp extends React.Component{
  constructor(props) {
    super(props)
    this.state = { currentPage: 0,
                    pages : [<HomePage />,
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
        <a className="navbar-brand" href="">
        <img src="/static/img/favicon2.svg" width="30" height="30" className="d-inline-block align-middle" alt=""/> Dahlia Kadri</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
          </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="btn btn-sm btn-outline-success" type="button" onClick={() => this.setState({currentPage: 0})}>About Me</button>
        </li>
        <li className="nav-item">
          <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => this.setState({currentPage: 1})}>Projects</button>
        </li>
         <li className="nav-item">
          <a href="/static/DahliaKadri_Resume.pdf" target="_blank"><button className="btn btn-sm btn-outline-secondary" type="button">Resume</button></a>
        </li>
        <li className="nav-item">
          <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => this.setState({currentPage: 2})}>Contact</button>
        </li>
        <li className="nav-item">
          <button className="btn btn-sm btn-outline-secondary" type="button" onClick={() => this.setState({currentPage: 3})}>Fun</button>
        </li>
      </ul>
    </div>
    </nav>
        <div className="row content">
          {this.state.pages[this.state.currentPage]}
        </div>
      </div>
            )
  }
}

class HomePage extends React.Component{
  render(){
    return(
      <div className="row justify-content-center">
      <div className="col-md-6 about-me">
      <a href="mailto:dahliakadri@gmail.com" target="_blank"><img src="/static/img/email.png"/></a>
      <a href="https://www.linkedin.com/in/dahliakadri/" target="_blank"><img src="/static/img/linkedin.png"/></a>
      <a href="https://github.com/dahliakadri/" target="_blank"><img src="/static/img/github.png"/></a>
      <br/>
      Hi! I'm Dahlia and a software engineer looking for new opportunities. I am currently working on internal tools with the Security Engineering team at Box. I previously built university computer science programs at Microsoft Egypt. My professional work, 
      travel escapades, and personal software & life hacks can be found on this site</div>
      <div className="col-md-6">
      <img src="/static/img/dahliakadri.jpg" className="dahlia-photo" alt="Poster"/></div>
      </div>)
  }
}


class Projects extends React.Component{

  render(){
    return(
      <div className="row justify-content-center">
      <div className="col-md-12 projects">
      <b>Moody - Movies by Destination</b>
      <br/>
      Python and React JS web application that enables users to search and save top rated movies by country.
      <br/>
      <a href="https://github.com/dahliakadri/movies_by_destination" target="_blank"><img src="/static/img/github.png"/>Github Repo</a>
      <br/>
      <a href="http://moodymovies.sadraii.com/" target="_blank"><img src="/static/img/moody.png"/>Deployed App</a>
      <br/>
      <img src="/static/img/moodymovie.gif" className="moody" alt="Poster"/>
      <br/>
      Moody Movies has a custom React front-end that allows users to search for top movies from countries.
      Utilizing IMDB datasets, Moody's PostgreSQL database holds 180,000 movies with country origin, ratings, and votes.
      Users also search for movies by country in an interactive Google Map API integration.
      </div>
      <div className="col-md-12 projects">
      <br/>
      <br/>
      <br/>
      <b>Travel Quiz</b>
      <br/> My first python project. Currently building the Javascript React front-end. 
      <br/>
      <a href="https://github.com/dahliakadri/Travel_Quiz" target="_blank"><img src="/static/img/github.png"/>Github Repo</a>
      </div></div>)
  }
}

class Contact extends React.Component{

  render(){
    return(
      <div>
      <div className="row">
      <img src="/static/img/linkedin.png"/> <a href="https://www.linkedin.com/in/dahliakadri/" target="_blank">linkedin.com/in/dahliakadri</a></div>
      <div className="row">
      <img src="/static/img/github.png"/> <a href="https://github.com/dahliakadri/" target="_blank">github.com/dahliakadri</a></div>
      </div>)
  }
}


class Fun extends React.Component{

  render(){
    return(
      <div>The occasional blog about travel, code, and dessert. Coming soon...</div>)
  }
}


ReactDOM.render(<DahliaApp />, document.getElementById('root'))
