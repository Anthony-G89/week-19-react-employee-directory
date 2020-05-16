import axios from "axios";

export default {
    getRandomPerson: function () {
        axios.get("https://randomuser.me/api/")

    }
}