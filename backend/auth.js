const axios = require("axios");

const getToken = async () => {
  try {

    const response = await axios.post(
      "http://20.207.122.201/evaluation-service/auth",
      {
        email: 'sk5414@srmist.edu.in',
        name: 'kandi sahasra reddy',
        rollNo: 'ra2311042020035',
        accessCode: 'QkbpxH',
        clientID: 'd1a02cd5-a73c-4c9f-92da-66dd501ef380',
        clientSecret: 'aYtWNeCJDXQMgWxc'
      }
    );

    console.log(response.data);

  } catch (error) {

    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};

getToken();