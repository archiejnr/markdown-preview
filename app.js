class Editor extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:'Archbold'
    }
  }
  render(){
    return(<textarea id="editor" rows="4" cols="50"></textarea>)
  }
}

const Preview=(props)=>{
  return(<div id="preview"></div>)
}
ReactDOM.render(<Editor/>,document.querySelector('#root'));
