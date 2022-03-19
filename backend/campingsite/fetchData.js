const axios = require('axios');

const fetchData = async () => {
  let serviceKey = decodeURIComponent(process.env.SERVICE_KEY);
  try {
    return await axios.get(process.env.GO_CAMPING_URL, {
      params: {
        ServiceKey: serviceKey,
        numOfRows: '10',
        pageNo: '1',
        MobileOS: 'ETC',
        MobileApp: 'AppTest',
        mapX: '128.6142847',
        mapY: '36.0345423',
        radius: '2000',
        _type: 'json',
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchData;
