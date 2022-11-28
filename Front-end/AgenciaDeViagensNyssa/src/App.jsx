import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom'
import Home from "./Pages/Home/Home";
import Destinos from "./Pages/Destinos/Destinos";
import Clientes from "./Pages/Clientes";
import ClientesCreate from "./Pages/Clientes/Create";
import Promocaos from "./Pages/Promocao";
import PromocaosCreate from "./Pages/Promocao/Create";



function App() {
	return (
		<div ClassName="App">
		<Router>
			<Header />
			<Footer />    
        <Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Destinos" element={<Destinos />} />
			<Route path="/Clientes" element={<Clientes />} />			
			<Route path="/Clientes-Create" element={<ClientesCreate />} />
			<Route path="/Clientes-Update/:id" element={<ClientesCreate />} />
			<Route path="/Promocaos" element={<Promocaos />} />
			<Route path="/Promocaos-Create/"element={<PromocaosCreate />} />
			<Route path="/Promocaos-Update/:id" element={<PromocaosCreate />} />
        </Routes>
        </Router>
	</div>
	)
}

export default App
