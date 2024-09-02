import Feed from "./Feed";
import Navbar from "./Navbar";
import Rightsidebar from "./Rightsidebar";
import Sidebar from "./Sidebar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App__body">
        <Sidebar />
        <Feed />
        <Rightsidebar />
      </div>
    </div>
  );
}
export default App;
