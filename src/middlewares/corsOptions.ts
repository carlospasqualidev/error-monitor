import cors from 'cors';

// CHANGE HERE

// ADD YOURS FRONTEND URLS
const allowedOrigins = ['http://localhost:3000'];

export const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
};
