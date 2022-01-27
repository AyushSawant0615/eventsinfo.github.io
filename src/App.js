import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'
import Events from './MyComponents/Events'
import Event from './MyComponents/Event'
import EventLeft from './MyComponents/EventLeft'
import Transaction from './MyComponents/Transaction'
function App() {
  return (
    <>
      
      <div class="row">
  <div class="col-4">
    <Event/>
  </div>
  <div class="col-8">
  <Header />
      <Events />  
      <div class="container">
        <div class="row">
          <div class="col">
            <EventLeft />
          </div>
          <div class="col">
            <Transaction />
          </div>
        </div>
      </div>
  </div>
</div>
     
    </>
  );
}

export default App;
