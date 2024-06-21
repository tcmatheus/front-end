import axios from "axios";

export const sendCodeToBackend = async (authCode) => {
  try {
    if (!authCode){
        return console.log("No code to send");
    }
    console.log(authCode);
    const response = await axios.post(
      "http://localhost:4004/api/oauth/code",
      { code: authCode }
    );
    console.log(response.config.data);
    return response.config.data;
  } catch (error) {
    throw new Error("Error sending Code to backend: " + error.message);
  }
};
