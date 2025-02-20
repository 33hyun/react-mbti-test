import axios from "axios";

const API_URL = "http://localhost:5000/auth";

// 회원가입 함수
export const signup = async (userData) => {
  return await axios.post(`${API_URL}/signup`, userData);
};

// 로그인 함수
export const login = async (userData) => {
  return await axios.post(`${API_URL}/login`, userData);
};

// 프로필 정보 가져오기
export const getProfile = async (token) => {
  return await axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};