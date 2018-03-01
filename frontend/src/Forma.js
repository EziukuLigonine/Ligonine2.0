import React from 'react';

const Forma = ({username, password, onPassChange, onUsernameChange, onSubmit}, context) => {
  return(
    <form onSubmit={onSubmit}>
      <input type="text" value={username} onChange={onUsernameChange} />
      <input type="password" value={password} onChange={onPassChange} />
      <input type="submit" />
    </form>
  );
}


export default Forma;
