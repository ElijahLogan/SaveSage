import axios from 'axios';

const app_id = 'ca386422';

const app_key = 'ade41765';

 const Edam = {
  search:  
    async (term) => {
        
 let output = axios.get('https://www.food2fork.com/api/search?key=cf2408379cb20459aa0e766d6690cd8f&q=orange')  .then(function (response) {
		return response;
  })
  .catch(function (error) {
    console.log(error);
  });
  
  return output
  }
    
}




export default Edam;
