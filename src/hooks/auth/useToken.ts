//! TODO: storing the token in localStorage is not a very good idea
const useToken = () => {
  const persist = (token: string) => {
    localStorage.setItem('jwt', token);
  };

  const retrieve = () => {
    return localStorage.getItem('jwt');
  };

  return {
    persist,
    retrieve
  };
};

export default useToken;
