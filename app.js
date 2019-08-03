const Preview=(props)=>{
  return(<div id="preview"></div>)
}

class Editor extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:'Archbold'
    }
  }
  render(){
    return(<textarea id="editor"></textarea>)
  }
}

ReactDOM.render(<Editor/>,document.querySelector('#editor_root'));
ReactDOM.render(<Preview/>,document.querySelector('#preview_root'));
