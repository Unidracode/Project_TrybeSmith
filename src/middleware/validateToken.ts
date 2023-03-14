import Jwt from 'jsonwebtoken';

const SECRET = 'secret';

const configJwt: object = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const validateToken = (username: string, id: number) => {
  const token = Jwt.sign({ data: { username, id } }, SECRET, configJwt);
  return token;
};

export default validateToken;
