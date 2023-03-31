import { UserProps } from "../types/user";

import { MdLocationPin } from "react-icons/md";

import { Link } from "react-router-dom";

import classes from "./search.module.css";

const user = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div className={classes.search}>
      <img src={avatar_url} alt="login" />
      <h2>Usuário:</h2>
      <h2>{login}</h2>
      <p>
        <MdLocationPin />
        <span>{location}</span>
      </p>
      <div>
        <p>Seguidores:</p>
        <p>{followers}</p>
      </div>
      <div>
        <p>Seguindo:</p>
        <p>{following}</p>
      </div>
      <Link to={`/repos/${login}`}>Ver Melhores Projetos</Link>
    </div>
  );
};

export default user;
