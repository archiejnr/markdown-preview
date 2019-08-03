const Preview=(props)=>{
  return(<div id="preview">{props.text}</div>)
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      placeHolderText:'place holder text'
    }
  }
  render(){
    return(<div class="row">
      <div id="editor_root" class="col-6"><Editor text={this.state.placeHolderText}/></div>
      <div id="preview_root" class="col-6"><Preview text={this.state.placeHolderText}/></div>
    </div>)
  }
}

const Editor=(props)=>{
  return (<textarea id="editor">{props.text}</textarea>)
}

ReactDOM.render(<App/>,document.querySelector('#root'));
