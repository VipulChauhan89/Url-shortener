import './App.css';
import SearchBar from './components/SearchBar';

function App() {

  return (
    <>
      <div className="flex justify-center mt-[15rem]">
        <h1 className="text-5xl font-bold font-mono text-blue-500 ml-5 mr-5">URL Shortener</h1>
      </div>
      <div className="flex justify-center">
        <h4 className="text-xl font-bold text-slate-500 ml-5 mr-5">Generate a short url and get redirected to the long url when you click on the short url.</h4>
      </div>
      <SearchBar/>
    </>
  )
}

export default App
