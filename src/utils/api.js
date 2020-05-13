import axios from "axios";

export default {
    getRandomPerson: axios.get("https://randomuser.me/api/")

}