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
    <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">Page 1</a></li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
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

class Fun extends React.Component{

  render(){
    return(
      <div>"Fun Stuff"</div>)
  }
}


ReactDOM.render(<DahliaApp />, document.getElementById('root'))
