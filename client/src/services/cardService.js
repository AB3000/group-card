//  /client/src/services/cardService.js

import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get('/api/card');
    return res.data || [];
  }
}