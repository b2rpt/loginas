const config = {
    baseUrl: process.env.REACT_APP_HOST_URL || process.env.REACT_APP_ENV === 'dev'
        ? 'http://localhost:5000'
        : '',
        loginUrl: '/api/auth/',
}

export default config;