import pathBackend from "./config.js";

const verificaToken = {
    async deleteToken() {
        pathBackend.patch('/revoke').then(function (res) {
            console.log(res);
            localStorage.removeItem("user_token");
            window.location.href = "/login";
        })
    }
}

export default verificaToken;