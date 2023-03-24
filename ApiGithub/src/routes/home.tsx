import { UserProps } from "../types/user";

import Search from "../components/search"; /* CUIDADO COM UPPER CASE  */

import { useState } from "react";

const home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (username: string) => {
    const res = await fetch('https://api.github.com/users/${userName}');

    const data = await res.json();

    console.log(data);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
    </div>
  );
};

export default home;
