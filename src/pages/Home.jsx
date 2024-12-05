import LoggedIn from "../components/LoggedIn";
import LogIn from "../components/LogIn";
import facade from "../util/apiFacade";

function Home({ loggedIn, setLoggedIn }) {
  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };

  const login = (user, pass) => {
    facade.login(user, pass).then(() => setLoggedIn(true));
  };

  return (
    <div>
      {!loggedIn ? (
        <LogIn login={login} />
      ) : (
        <div>
          <LoggedIn loggedIn={loggedIn} />
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Home;
