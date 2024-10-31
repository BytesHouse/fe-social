import { useState } from "react";
import { Home } from "./atoms/Home";
import { LoginForm } from "./molecules/LoginForm";
import { RegisterForm } from "./molecules/RegisterForm";
import { ImageForm } from "./molecules/ImageForm";

// router
// Context
//

function App() {
  return (
    <>
      <span>Login</span>
      <LoginForm />
      <span>Register</span>
      <RegisterForm />
      <span>File Uploder</span>
      <ImageForm />
    </>
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
