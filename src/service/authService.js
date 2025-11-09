import { API_ENDPOINTS } from '../config/api';

export const authService = {
  // Đăng nhập
  login: async (email, password) => {
    const response = await fetch(API_ENDPOINTS.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    });
    return await response.json();
  },

  // Đăng ký
  register: async (name, email, password) => {
    const response = await fetch(API_ENDPOINTS.REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    });
    return await response.json();
  },

  // Xác thực OTP
  verifyOtp: async (email, otp) => {
    const response = await fetch(API_ENDPOINTS.VERIFY_OTP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp })
    });
    return await response.json();
  },

  // Lưu token
  saveToken: (accessToken, user) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('user', JSON.stringify(user));
  },

  // Lấy token
  getToken: () => {
    return localStorage.getItem('accessToken');
  },

  // Đăng xuất
  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  }
};