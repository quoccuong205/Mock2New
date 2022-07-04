import 'antd/dist/antd.css';
import axios from '../axios';
import { message } from 'antd';
import { getMyProfileSuccess, loginSuccess, logoutSuccess } from './reducer';

export const login = async (values, dispatch, nav) => {
  try {
    const { data } = await axios.post('/v1/auth/login', {
      email: values.email,
      password: values.password,
      deviceId: values.deviceId,
    });
    dispatch(loginSuccess(data));
    nav('/productpage');
    message.success({
      title: 'Login success',
    });
  } catch (error) {
    message.error({
      title: 'Login failed',
      content: error.response.data.message,
    });
  }
};

export const register = async (values, nav) => {
  try {
    await axios.post('/v1/auth/register', {
      username: values.username,
      email: values.email,
      password: values.password,
    });
    nav('/login');
    message.success({
      title: 'Register successed',
    });
  } catch (error) {
    message.error({
      title: 'Register failed',
      content: error.response.data.message,
    });
  }
};

export const sendCode = async (email) => {
  try {
    await axios.post('/v1/auth/forgot-password', {
      email: email,
    });
    message.success({
      title: 'Send Code successed',
    });
  } catch (error) {
    message.error({
      title: 'Send Code failed',
      content: error.response.data.message,
    });
  }
};

export const getMyProfile = async (dispatch, accessToken) => {
  try {
    const { data } = await axios.get('/v1/users/my-profile', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(getMyProfileSuccess(data));
    console.log(data + 'abc');
  } catch (error) {
    message.error({
      title: 'Get infor failed',
      content: error.response,
    });
  }
};

export const logout = async (refreshToken, deviceId, dispatch) => {
  try {
    await axios.post('/v1/auth/logout', {
      refreshToken,
      deviceId,
    });
    dispatch(logoutSuccess());
    message.success({
      title: 'Logout successed',
    });
  } catch (error) {
    message.error({
      title: 'Logout failed',
    });
  }
};

export const changeContact = async (accessToken, contact) => {
  try {
    const { data } = await axios.patch(
      '/v1/users/change-contact',
      { contact: contact },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );
    console.log(data);
    message.success({
      title: 'Change Contact successed',
    });
  } catch (error) {
    message.error({
      title: 'Change Contact failed',
      content: error.response.data.message,
    });
  }
};

export const changeUsername = async (accessToken, username) => {
  try {
    const { data } = await axios.patch(
      '/v1/users/change-username',
      { username: username },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );
    message.success({
      title: 'Change Username successed',
    });
    console.log(data);
  } catch (error) {
    message.error({
      title: 'Change Username failed',
      content: error.response,
    });
  }
};

export const changeEmail = async (accessToken, email) => {
  try {
    const { data } = await axios.patch(
      '/v1/users/change-email',
      { email: email },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );
    console.log(data);
    message.success({
      title: 'Change Email successed',
    });
  } catch (error) {
    message.error({
      title: 'Change Email failed',
      content: error.response.data.message,
    });
  }
};

export const changePassword = async (accessToken, newPass, oldPass) => {
  try {
    const { data } = await axios.patch(
      '/v1/users/change-password',
      { oldPassword: oldPass, newPassword: newPass },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );
    console.log(data);
    message.success({
      title: 'Change Password successed',
    });
  } catch (error) {
    message.error({
      title: 'Change Password failed',
      content: error.response.data.message,
    });
  }
};

export const changeAvatar = async (accessToken, avatar) => {
  try {
    const { data } = await axios.patch(
      '/v1/users/change-avatar',
      { avatar: avatar },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );
    console.log(data);
    message.success({
      title: 'Change Avatar successed',
    });
  } catch (error) {
    message.error({
      title: 'Change Avatar failed',
      content: error.response.data.message,
    });
  }
};
