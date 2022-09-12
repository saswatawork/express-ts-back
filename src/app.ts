import express, { NextFunction, Request, Response } from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { userRoute } from './routes/user';
import { connectDB } from './configs/db';

dotenv.config();
// connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// middleware API route
app.use('/v1/user', userRoute);

// body parser
app.use(express.json());

// swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/*.js'],
};

const openapiSpecification = swaggerJsDoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.send(`Welcome to Express TS`);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// handle unhandled promise rejection
process.on('unhandledRejection', (err: Error, promise: any) => {
  console.log(`Error: ${err.message}`);
  // close server and exit process
  server.close(() => process.exit(1));
});
