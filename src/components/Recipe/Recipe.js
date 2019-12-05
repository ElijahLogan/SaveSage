import React from 'react';
import './Recipe.css';





class Recipe extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="Recipe" style={{  backgroundImage: 'linear-gradient(to right,#212529 , #5cdb95)'}}>
        <div className="image-container-recipe">
          <a href={this.props.company.website}>
            <img src={this.props.company.image} alt='' />
          </a>
        </div>
        <h1>{this.props.company.symbol}</h1>
        <h2 className = "CompanyName">{this.props.company.companyName}</h2>
        <div className="Recipe-information" >
          <div className="Recipe-address">
            <p style={{}}>CEO: {this.props.company.ceo}</p>
            <br />
            <p style={{}}>{this.props.company.exchange}</p>

          </div>

        </div>
      </div>
    );
  }
}

export default Recipe
