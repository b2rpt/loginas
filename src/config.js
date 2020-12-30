const config = {
    baseUrl: process.env.REACT_APP_HOST_URL || process.env.REACT_APP_ENV === 'dev'
        ? 'http://localhost:5000'
        : 'http://localhost:5000',
        loginUrl: '/api/auth/',
        locationUrl:'/api/locations',
        getCooksUrl:'/api/cookdetails',
        registerUserUrl:'/api/users',
        addCookDetailsUrl:'/api/cookdetails',
}

export default config;