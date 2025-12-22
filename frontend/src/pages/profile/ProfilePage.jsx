import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      <p>
        <b>Name:</b> {user.name}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Role:</b> {user.role}
      </p>

      <div className="mt-6 flex gap-3">
        <Button onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>

        <Button variant="destructive" onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;
