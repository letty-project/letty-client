import './App.css';
import { Card } from './components/Card';
import { Header } from './components/Header';
import DottedLine from './assets/dotted-line.svg';

function App() {
    return (
        <>
            <div className="h-screen w-screen bg-white bg-gradient-to-t from-[#15A09166] via-[#15A09166] to-white flex justify-center items-center flex-col">
                <Header></Header>
                <Card />
                <img
                    className="fixed left-4 bottom-0"
                    src={DottedLine}
                    alt="Dotted Line"
                />
            </div>
        </>
    );
}

export default App;
