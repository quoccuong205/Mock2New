import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeAvatar,
  changeContact,
  changeEmail,
  changePassword,
  changeUsername,
} from '../redux/auth/action';
import { selectAccessToken } from '../redux/auth/selector';

function EditProfile() {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    contact: '',
    avatar: '',
  });
  const handleUserName = async () => {
    await dispatch(changeUsername(accessToken, user.username));
  };
  const handleEmail = async () => {
    await dispatch(changeEmail(accessToken, user.email));
  };
  const handlePassword = async () => {
    await dispatch(changePassword(accessToken, user.password));
  };
  const handleContact = async () => {
    await dispatch(changeContact(accessToken, user.contact));
  };
  const handleAvatar = async () => {
    await dispatch(changeAvatar(accessToken, user.avatar));
  };
  const onChangeInput = function (event) {
    const { name, value } = event.target;
    console.log(value);
    setUser({ ...user, [name]: value });
  };
  return (
    <div className="flex flex-col">
      <p className="not-italic text-center mt-7 font-bold text-[36px] leading-7 font-roboto">
        Edit Profile
      </p>
      <div className="flex flex-row">
        <input
          className="w-[700px] p-4 h-[50px] mt-[50px] ml-[50px] text-[22px] rounded-[5px] mr-10 font-roboto text-[#757575] border-2"
          name="username"
          type="text"
          placeholder="username"
          value={user.username}
          onChange={onChangeInput}
        />
        <button
          onClick={handleUserName}
          className="w-[250px] h-[50px] mt-[50px] mr-10 bg-[#FFD333] rounded-[5px] font-roboto font-bold text-[20px] leading-[19px] not-italic"
        >
          Change username
        </button>
      </div>
      <div className="flex flex-row">
        <input
          className="w-[700px] p-4 h-[50px] mt-[50px] ml-[50px] text-[22px] rounded-[5px] mr-10 font-roboto text-[#757575] border-2"
          name="email"
          type="email"
          placeholder="Email@mail.com"
          value={user.email}
          onChange={onChangeInput}
        />
        <button
          onClick={handleEmail}
          className="w-[250px] h-[50px] mt-[50px] mr-10 bg-[#FFD333] rounded-[5px] font-roboto font-bold text-[20px] leading-[19px] not-italic"
        >
          Change email
        </button>
      </div>
      <div className="flex flex-row">
        <input
          className="w-[700px] p-4 h-[50px] mt-[50px] ml-[50px] text-[22px] rounded-[5px] mr-10 font-roboto text-[#757575] border-2"
          name="password"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={onChangeInput}
        />
        <button
          onClick={handlePassword}
          className="w-[250px] h-[50px] mt-[50px] mr-10 bg-[#FFD333] rounded-[5px] font-roboto font-bold text-[20px] leading-[19px] not-italic"
        >
          Change password
        </button>
      </div>
      <div className="flex flex-row">
        <input
          className="w-[700px] p-4 h-[50px] mt-[50px] ml-[50px] text-[22px] rounded-[5px] mr-10 font-roboto text-[#757575] border-2"
          name="contact"
          type="text"
          placeholder="Contact"
          value={user.contact}
          onChange={onChangeInput}
        />
        <button
          onClick={handleContact}
          className="w-[250px] h-[50px] mt-[50px] mr-10 bg-[#FFD333] rounded-[5px] font-roboto font-bold text-[20px] leading-[19px] not-italic"
        >
          Change contact
        </button>
      </div>
      <div className="flex flex-row">
        <input
          className="w-[700px] p-4 h-[50px] mt-[50px] ml-[50px] text-[22px] rounded-[5px] mr-10 font-roboto text-[#757575] border-2"
          name="avatar"
          type="text"
          placeholder="Avatar"
          value={user.avatar}
          onChange={onChangeInput}
        />
        <button
          onClick={handleAvatar}
          className="w-[250px] h-[50px] mt-[50px] mr-10 bg-[#FFD333] rounded-[5px] font-roboto font-bold text-[20px] leading-[19px] not-italic"
        >
          Change avatar
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
