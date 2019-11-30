import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Recipe from '../Recipe/Recipe';
import Edam from '../util/Edam';

class RecipeSearch extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      company: {
        ceo: '',
        changes: '',
        companyName: '',
        description: '',
        exchange: '',
        image: '',
        industry: '',
        mktCap: '',
        price: '',
        range: '',
        sector: '',
        volAvg: '',
        website: '',
        symbol: ''
      }
    }
    this.searchEdam = this.searchEdam.bind(this)
  }
  componentWillMount() {
    let finance = Edam.search('MSFT')
    finance.then(res => {
      let symbol = res.data.symbol
      let profile = res.data.profile
      let payload = { symbol, ...profile }
      console.log(payload)
      this.setState({ company: payload })
      return payload
    })


  }

  componentDidMount() {
    console.log(this.state.company)
  }


  async searchEdam(term) {
    //returns object
    let finance = await Edam.search(term)
   
      let symbol = finance.data.symbol
      let profile = finance.data.profile
      let payload = { symbol, ...profile }
     
      this.setState({ company: payload })
     
 





  }


  // React components are simple functions that take in props and state, and render HTML
  render() {
    return (
      <div>
        <SearchBar searchEdam={this.searchEdam} />

        <div className = 'company_view'> 
          <Recipe company={this.state.company} />
        </div>

      
       

      </div>
    );
  }
}

export default RecipeSearch