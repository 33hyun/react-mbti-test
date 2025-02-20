import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth"; // auth.js에서 login 함수 가져오기

const Login = () => {
  // 이메일과 비밀번호를 저장할 상태 변수 선언
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 페이지 이동을 위한 useNavigate 훅 사용
  const navigate = useNavigate();

  // 로그인 버튼을 눌렀을 때 실행되는 함수
  const handleLogin = async (e) => {
    e.preventDefault(); // 폼이 제출될 때 페이지가 새로고침되는 기본 동작을 방지

    try {
      // login 함수 호출하여 로그인 API 요청 보내기
      const res = await login({ email, password });

      // 로그인 성공 시 JWT 토큰을 localStorage에 저장
      localStorage.setItem("token", res.data.token);

      // 프로필 페이지로 이동
      navigate("/profile");
    } catch (err) {
      // 서버에서 받은 오류 응답을 콘솔에 출력
      console.error(err.response?.data || err.message);

      // 로그인 실패 시 사용자에게 오류 메시지 표시
      alert(err.response?.data?.message || "로그인 실패!");
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {/* 로그인 페이지 제목 */}
      <h2 className="text-2xl mb-4">로그인</h2>

      {/* 로그인 폼 */}
      <form onSubmit={handleLogin} className="flex flex-col gap-2 w-64">
        {/* 이메일 입력 필드 */}
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2"
        />

        {/* 비밀번호 입력 필드 */}
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2"
        />

        {/* 로그인 버튼 */}
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          로그인
        </button>
      </form>

      {/* 회원가입 버튼 - 로그인 버튼과 크기 맞춤 */}
      <button
        onClick={() => {
          navigate("/signup");
        }}
        className="bg-gray-500 text-white p-2 w-64 mt-4"
      >
        회원가입
      </button>
    </div>
  );
};

export default Login;