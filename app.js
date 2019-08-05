const Preview=(props)=>{
  return(<div id="preview" dangerouslySetInnerHTML={{__html: marked(props.text)}}></div>)
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      placeHolderText:'place holder text'
    }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange=(e)=>{
    this.setState({
      placeHolderText:e.target.value
    })
  }
  render(){
    return(
      <div className="row">
        <div id="editor_root" className="col-xl-6"><Editor text={this.state.placeHolderText} onChange={this.handleChange}/></div>
        <div id="preview_root" className="col-xl-6"><Preview text={this.state.placeHolderText}/></div>
      </div>
          )
  }
}
const Editor=(props)=>{
  return (<textarea id="editor" onChange={props.onChange}>{props.text}</textarea>)
}

ReactDOM.render(<App/>,document.querySelector('#root'));
