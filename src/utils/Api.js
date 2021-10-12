import axios from 'axios';


const baseURL = 'https://soupe-api.herokuapp.com/api/'     


const axiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 5000,
  headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
});


axiosInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		const originalRequest = error.config;

		if (typeof error.response === 'undefined') {

			return Promise.reject(error);
		}

		if (
			error.response.status === 401 &&
			originalRequest.url === baseURL + 'auth/jwt/refresh/'
		) {
			window.location.href = '/login-signup/';
			return Promise.reject(error);
		}

		if (
			error.response.data.code === 'token_not_valid' &&
			error.response.status === 401 &&
			error.response.statusText === 'Unauthorized'
		) {
			const refreshToken = localStorage.getItem('refresh');

			if (refreshToken) {
				const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

				// exp date in token is expressed in seconds, while now() returns milliseconds:
				const now = Math.ceil(Date.now() / 1000);
				console.log(tokenParts.exp);

				if (tokenParts.exp > now) {
					return axiosInstance
						.post('auth/jwt/refresh/', {
							refresh: refreshToken,
						})
						.then((response) => {
							localStorage.setItem('access', response.data.access);
							localStorage.setItem('refresh', response.data.refresh);

							axiosInstance.defaults.headers['Authorization'] =
								'JWT ' + response.data.access;
							originalRequest.headers['Authorization'] =
								'JWT ' + response.data.access;

							return axiosInstance(originalRequest);
						})
						.catch((err) => {
							console.log(err);
						});
				} else {
					console.log('Refresh token is expired', tokenParts.exp, now);
					window.location.href = '/login-signup/';
				}
			} else {
				console.log('Refresh token not available.');
				window.location.href = '/login-signup/';
			}
		}

		// specific error handling done elsewhere
		return Promise.reject(error);
	}
);


export default axiosInstance;