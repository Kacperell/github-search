
const GITHUB_API = process.env.REACT_APP_API_KEY;
const authConfig = () => {
    const config = {
        headers: {
            'Content-type': 'application/json',
            authorization: `Bearer ${GITHUB_API}`,

        }
    };
    return config;
};


export default authConfig
