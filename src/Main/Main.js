import  { useState } from "react";
import "./Main.scss";

function Main() {
  const [name, setName] = useState("");

  return (
    <>
      <div className="Main">
        <h1>
          Main
        </h1>
        <form className="form" action="" method="get">
          <div>
            name:
            <input value={name} onChange={(e) => setName(e.target.value)} />
            //add validation
            {name.length < 3 ? <p>name must be at least 3 characters</p> : null}
          </div>
          <div>
            Username: <input />
          </div>
          <div>
            Email: <input type="email" />
          </div>
          <div>
            Password: <input type="password" />
          </div>
          <div>
            Confirm Password : <input type="password" />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Main;
