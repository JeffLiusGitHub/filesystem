import logo from './logo.svg';
import './App.css';
import Folder from './Component/Folder';
import { explorer } from './data/file-system';
function App() {
	return (
		<>
			<Folder explorer={explorer} />
		</>
	);
}

export default App;
