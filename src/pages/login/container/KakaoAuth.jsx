import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function KakaoAuth() {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const data = new URLSearchParams(window.location.search);
      console.log(data.get("code"));
      // fetch auth code to back: use axios.post()
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }, [navigate]);

  return (
    <div
      style={{
        margin: "50%",
        color: "white",
      }}
    >
      {"Loading..."}
    </div>
  );
}
