const axios = require("axios");

const register = async () => {
  try {

    const response = await axios.post(
      "http://20.207.122.201/evaluation-service/register",
      {
        email: "sk5414@srmist.edu.in",
        name: "Kandi Sahasra Reddy",
        mobileNo: "9985767899",
        githubUsername: "Sahasra-240805",
        rollNo: "RA2311042020035",
        accessCode: "QkbpxH"
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

register();