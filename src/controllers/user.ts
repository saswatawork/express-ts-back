import { RequestHandler } from 'express';
import { API_RESPONSE_SUCCESS } from '../utils/apiResponse';
import { API_STATUS_SUCCESS } from '../utils/apiStatus';
import { User } from '../models/Users';
import { HttpError } from '../models/HttpError';

/**
 * @param req
 * @param res
 * @param next
 * @desc Get user
 * @route GET /v1/user
 * @access Public
 *
 */
export const getUsers: RequestHandler = (req, res, next) => {
  res.status(API_STATUS_SUCCESS.OK).json({ ...API_RESPONSE_SUCCESS.DATA, data: [] });
};

/**
 * @param req
 * @param res
 * @param next
 * @desc Add user
 * @route POST /v1/user
 * @access Public
 *
 */
export const addUser: RequestHandler = async (req, res, next) => {
  const user = new User({
    name: 'Saswata Pal',
    username: 'saswatapal',
    email: 'saswata.career@gmail.com',
    phone: '9836507426',
    createdAt: Date.now,
  });
  // const user = new User(req.body);
  try {
    await user.save();
  } catch (err) {
    return next(new HttpError('Creating user failed', 500));
  }
  res.status(API_STATUS_SUCCESS.CREATE).json({ ...API_RESPONSE_SUCCESS.MESSAGE, message: 'User added succesfully' });
};

/**
 * @param req
 * @param res
 * @param next
 * @desc Get user
 * @route GET /v1/user
 * @access Public
 *
 */
export const getUser: RequestHandler = (req, res, next) => {
  res.status(API_STATUS_SUCCESS.OK).json({ ...API_RESPONSE_SUCCESS.DATA, data: {} });
};

/**
 * @param req
 * @param res
 * @param next
 * @desc Update user
 * @route PUT /v1/user
 * @access Public
 *
 */
export const updateUser: RequestHandler = (req, res, next) => {
  res.status(API_STATUS_SUCCESS.OK).json({ ...API_RESPONSE_SUCCESS.MESSAGE, message: 'User updated succesfully' });
};
