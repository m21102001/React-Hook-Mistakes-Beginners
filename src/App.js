import { useRef, React } from "react";
import "./styles.css";

function App() {
  const emailref = useRef();
  const passwordref = useRef();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  function onsubmit(e) {
    e.preventDefult();

    // console.log({ emailref, passwordref });
    // console.log({ email, password });
    console.log({
      email: emailref.current.value,
      password: passwordref.current.value
    });
  }

  return (
    <div className="App">
      <form onsubmit={onsubmit}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          ref={emailref}
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          ref={passwordref}
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
export default App;
