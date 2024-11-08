// import { useState } from "react";
// import { Home } from "./atoms/Home";
import { LoginForm } from "./molecules/LoginForm";
// import { RegisterForm } from "./molecules/RegisterForm";
// import { ImageForm } from "./molecules/ImageForm";
// import PostsList from "./molecules/PostsList";
import { socket } from "./socket";
import { useEffect, useState } from "react";

// router
// Context
//

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents((previous) => [...previous, value]);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("foo", onFooEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("foo", onFooEvent);
    };
  }, []);

  return (
    <>
      <span>Login</span>
      <LoginForm />
      {/* <span>Register</span>
      <RegisterForm />
      <span>File Uploder</span>
      <ImageForm />
      <span>Posts</span>
      <PostsList /> */}
      <ConnectionManager />
    </>
  );
}

export function ConnectionManager() {
  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </>
  );
}

export function MyForm() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(5000).emit("create-something", value, () => {
      setIsLoading(false);
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={(e) => setValue(e.target.value)} />

      <button type="submit" disabled={isLoading}>
        Submit
      </button>
    </form>
  );
}

// function App() {
//   return (
//     <>
//       {/* <ContextProvider>
//         <BrowserRouter>
//           <ProtectedRoutes>
//             <Main />
//           </ProtectedRoutes>
//           <SignIn />
//           <Registration />
//         </BrowserRouter>
//       </ContextProvider> */}
//     </>
//   );
// }

// function App() {
//   const [state, setState] = useState(0);
//   const handleClick = () => {
//     setState(0);
//   };
//   const handleClickOther = () => {
//     setState(1);
//   };
//   return (
//     <>
//       <button onClick={handleClick}>
//         <Home state={state == 0} />
//         <span>Home</span>
//       </button>
//       <button onClick={handleClickOther}>
//         <Home state={state == 1} />
//         <span>Other Home</span>
//       </button>
//     </>
//   );
// }

export default App;
