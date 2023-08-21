import StyledGlobal from './styledGlobal';
import Header from './components/Header/Header';
// import Login from './pages/Login/Login';
// import Start from './pages/Start/Start';
import Register from './pages/Register/Register'

function App() {
  return (
    <div>
      <StyledGlobal/>
      <Header />
      {/* <Start /> */}
      {/* <Login /> */}
      <Register />
      </div>
  );
};
 
export default App;
