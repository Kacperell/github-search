
const GITHUB_API = process.env.REACT_APP_API_KEY;
const authConfig = () => {
    console.log(process.env);
    const config = {
        headers: {
            'Content-type': 'application/json',
            authorization: `Bearer ${GITHUB_API}`,

        }
    };
    return config;
};


export default authConfig
