import { message } from 'antd';
import axios from '../axios';
import { getAllOrderSuccess } from './reducer';

export const getAllOrder = async (accessToken, dispatch) => {
  try {
    const { data } = await axios.get('/v1/orders/my-orders', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    console.log(data);
    dispatch(getAllOrderSuccess(data));
  } catch (error) {
    message.error({
      title: 'Get orders failed',
      content: error.response.data.message,
    });
  }
};
