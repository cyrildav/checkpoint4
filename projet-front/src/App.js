import './App.css';
import NavBar from './navBar/NavBar';



function App() {
  return (
    <div className="App">
      <img src="https://i.picsum.photos/id/695/1900/300.jpg?hmac=BoNlo8NzatLWklLoG305pbI4tDRyqX0jVAYsrwGHxZk" alt="nature" width="100%" className="header"/>
      <div className="accueil">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
