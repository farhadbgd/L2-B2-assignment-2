import { Request, Response } from 'express';
import { userService } from './user.Service';
import { z } from 'zod';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await userService.createUserIntoDb(user);
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      res.send({ error });
      return;
    }
    res.status(500).json({
      success: false,
      message: error.message || 'User not found',
    });
  }
};
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUsersfromDb();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const Id = parseInt(req.params.userId);
    const result = await userService.getSingleUserfromDb(Id);
    if (result === null) {
      res.status(200).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'User fetched successfully!',
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const Id = parseInt(req.params.userId);
    const user = req.body;
    const result = await userService.updateSingleUserInDb(Id, user);

    if (result === null) {
      res.status(200).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'User fetched successfully!',
        data: result,
      });
    }
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      res.send({ error });
      return;
    }
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};
const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const Id = parseInt(req.params.userId);
    const result = await userService.deleteSingleUserfromDb(Id);

    if (result.deletedCount === 0) {
      res.status(200).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'User deleted successfully!',
        data: null,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const createOrder = async (req: Request, res: Response) => {
  try {
    const Id = parseInt(req.params.userId);
    const Order = req.body;
    await userService.createOrderInUser(Id, Order);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: error.message,
      },
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const Id = parseInt(req.params.userId);
    const result = await userService.getAllOrdersfromDb(Id);
    res.status(200).json({
      success: true,
      message: 'Order fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: error.message,
      },
    });
  }
};
const getTotalPrice = async (req: Request, res: Response) => {
  try {
    const Id = parseInt(req.params.userId);
    const result = await userService.getTotalPricefromDb(Id);
    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: { totalPrice: result },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: error.message,
      },
    });
  }
};

export const userControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
  createOrder,
  getAllOrders,
  getTotalPrice,
};
