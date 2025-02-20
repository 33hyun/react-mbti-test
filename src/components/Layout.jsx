import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* 네비게이션 바 */}
      <header>
        <nav>
          <div>
            <Link to="/">홈</Link>
            <Link to="/test">MBTI 테스트</Link>
          </div>
          <div>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </div>
        </nav>
      </header>

      {/* 렌더링 부분 */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;