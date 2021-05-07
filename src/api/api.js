import axios from "axios";

const apiUrl = "https://randomuser.me/api/?key=5MHW-MO4I-67YZ-O1I3&results=20";

async function getData() {
  try {
    const response = await axios(`${apiUrl}`);
    const data = await response.data.results;
    console.log(data);
  } catch (e) {
    throw new Error(e);
  }
}

export default getData;
