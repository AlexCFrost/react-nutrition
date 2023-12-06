import { Component } from 'react'
import './App.css'
import FoodBox from './components/FoodBox'
import FoodData from './Components/FoodData'
import Search from './components/Search';

class App extends Component {
  constructor(){
    super();
    this.state = {
      search:"",
      count:0
    }
  }

  handleSearch = (info) => {
    this.setState({search:info})
  }

  render() {

    return (
      <>
      <div>
        <Search handleSearch={this.handleSearch} />
        {FoodData.filter((el)=>{

            if(this.state.search==""){
              return el
            }
            else if(el.name.toLowerCase().includes(this.state.search.toLowerCase())){
              return el
            }
          }).map((el)=>{
         return <div key={el.id}>
             <FoodBox food={el} count={this.state.count} handleSearch={this.handleSearch}/>
          </div>
        })}
      </div>
      </>
    )
  }
}



export default App



