import React, { Component } from 'react'
import List from './List';

export default class FoodBox extends Component {

    constructor(props){
        super(props);

        this.state = {
            count:0,
            total:0
        }
    }

    handleCount = (value) =>{
        this.setState({count:value})
      }
    
      handleTotal = (total) =>{
        this.setState({total:this.state.count*this.props.food.cal})
      }

      handleReset = () =>{
        this.setState({count:0,
        total:0})
      }

  render() {
    return (
        <>
      <div id="foodBox">
        <img src={this.props.food.img}/>
        <h1>{this.props.food.name}</h1>
        <h3>{this.props.food.cal}</h3>
        <div id="foodcount">
            <input type='number' value={this.state.count} placeholder='enter a number' onChange={(e)=> this.handleCount(e.target.value)}/>
            <button onClick={this.handleTotal}>+</button>
        </div>
        <List count={this.state.count} name={this.props.food.name} total={this.state.total} handleReset={this.handleReset}/>
      </div>
      </>
    )
  }
}









