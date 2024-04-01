import logo from './assets/NTlogos/SocialMedia-Icon.png';
import './App.css';
import GetSupply from './components/API/GetSupply';
import GetTokenSupply from './components/API/GetTokenSupply';
import Test2 from './components/Test2';
import Walletconnection from './components/Connection/Walletconnection';
import { ContentBoxFrame } from './styles/Frame';
import { GlobalStyles } from "./styles/Global";
import Setglobal from './styles/Setglobal';
import Dummy from './components/Dummy';
import { DataProvider } from './context/Dataprovider';
import SPLtoken from './components/SPLtoken';
import Dummy2 from './components/Dummy2';
import Dummy3 from './components/Dummy3';
import Rpctest from './components/Rpctest.js';
import Chaindata from './components/Contract/Chaindata';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Setglobal />
          <DataProvider>
            <ContentBoxFrame>
              <Walletconnection />
              <Chaindata/>
              <SPLtoken />
            </ContentBoxFrame>
          </DataProvider>
        </header>
      </div>
    </>
  );
}

export default App;
