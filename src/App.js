import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'

class Title extends Component{
    static contextTypes={
        themeColor:PropTypes.string,
        handleChangeThemeColor:PropTypes.func
    }
    render(){
        const {themeColor}=this.state
        return(
            <div style={{color:themeColor}}>
                标题
            </div>
        )
    }
}
class Button extends Component{
    static contextTypes={
        title:PropTypes.string,
        handleChangeThemeColor:PropTypes.func
    }
    render(){
        const {themeColor,handleChangeThemeColor}=this.state
        return(
            <div>
               <button style={{color:themeColor}} onClick={()=>handleChangeThemeColor('red')}>red</button>
                <button style={{color:themeColor}} onClick={()=>handleChangeThemeColor('green')}>green</button>
            </div>
        )
    }
}
class App extends Component {
    static childContextTypes={
        themeColor:PropTypes.string,
        handleChangeThemeColor:PropTypes.func
    }
    constructor(props){
        super(props)
        this.state={
            themeColor:'red'
        }
    }
    handleChangeThemeColor(color){
        this.setState({
        themeColor:color
        })
    }
    
    getChildContext(){
        return {
            themeColor:this.state.themeColor,
            handleChangeThemeColor:(color)=>this.handleChangeThemeColor(color)
        }
    }
  render() {
    return (
      <div >
       <Title />
          <Button/>
      </div>
    );
  }
}

export default App;
