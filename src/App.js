import logo from './logo.svg';
import './App.css';
import Cat from './Components/Cat';
import Footer from './Components/Footer';

function App() {
const data={
  pic:"http://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
  name :"Si la7bib",
  race:"9atous Lux"
}

// alert function

const handleAlert=(x)=>alert(`the cat name ${x.name} and it race ${x.race} `)

  return (
    <div className="App">
     <Cat katous={data} handle={handleAlert} />
     <Footer normal="hello this a normal props">
hello this is a child props
     </Footer>
    </div>
  );
}

export default App;
