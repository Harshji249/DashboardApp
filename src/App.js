import './App.css';
import Dashboard from './components/Dashboard';
import Datatable from './components/Datatable';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <div className='main'>
      <Sidebar/>
      <Dashboard/>
    </div>
    <Datatable/>
    </>
  );
}

export default App;
