import { UserProps } from "../types/user";

import Search from "../components/search"; /* CUIDADO COM UPPER CASE  */

import { useState } from "react";

const home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    const {avatar_url, login, location, followers, following} = data
  };

  return (
    <div>
      <Search loadUser={loadUser} />
    </div>
  );
};

export default home;
