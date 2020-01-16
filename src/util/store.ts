

interface storeRules { 
    auth: string
}
const authConfig:storeRules = {
    auth: localStorage.getItem("openid") || '0',
}
export default authConfig;
