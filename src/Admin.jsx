import { useEffect } from "react";

const Admin = () => {
  useEffect(() => {
    window.location.href = "http://donation.free.je/donation-api/admin/login.php";
    // window.location.href = "http://localhost/donation-api/admin/login.php";
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "25px",
      }}
    >
      Redirecting to Admin Panel...
    </div>
  );
};

export default Admin;
