import StyledGlobal from './styledGlobal';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
// import Start from './pages/Start/Start';

function App() {
  return (
    <div>
      <StyledGlobal/>
      <Header />
      {/* <Start /> */}
      <Login />
    </div>
  );
};
 
export default App;
