import { githubToken } from "../config";
const authConfig = async () => {
    const config = {
        headers: {
            'Content-type': 'application/json',
            authorization: `Bearer ${githubToken}`,

        }
    };
    return config;
};


export default authConfig
