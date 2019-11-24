import axios from 'axios';

const app_id = 'ca386422';

const app_key = 'ade41765';

const Edam = {
  search:
    async (term) => {

      let output = await axios.get(`https://financialmodelingprep.com/api/v3/company/profile/${term}`).then(function (response) {
        return response;
      })
        .catch(function (error) {
          console.log(error);
        });

      return output
    },
  search_index: async () => {

    let output = axios.get('https://financialmodelingprep.com/api/v3/majors-indexes').then(function (response) {
      return response;
    })
      .catch(function (error) {
        console.log(error);
      });

    return output
  }

}




export default Edam;
