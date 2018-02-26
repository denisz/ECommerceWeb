export const port = process.env.PORT || 8000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

export const apiURL = process.env.API_URL || 'http://localhost:8082';
export const apiBasePath = '/api/v1';
