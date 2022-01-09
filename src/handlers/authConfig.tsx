import { githubToken } from "../config";
const authConfig = () => {
    const config = {
        headers: {
            'Content-type': 'application/json',
            authorization: `Bearer ${githubToken}`,

        }
    };
    return config;
};


export default authConfig
