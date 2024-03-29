import React from "react";
import { useUserAuth } from "./../../hooks/useAuthContext"

const Home = () => {
  const { user } = useUserAuth();

  return (
    <div className="p-4 box mt-3 text-center">
      Hello Welcome <br />
      {user && user.email}
    </div>
  );
};

export default Home;