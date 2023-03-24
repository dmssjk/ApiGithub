type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { useState } from "react";

import { BsSearch } from "react-icons/BS";

const search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <h2>Busque por usuário:</h2> {/*  */}
      <p>conheça seus melhores repositórios</p>
      <div>
        <input
          type="text"
          placeholder="Usuário"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default search;
