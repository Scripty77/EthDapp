import { useState } from 'react';
import './index.css';
import { Header } from './components/Header.jsx';
import { Dashboard } from './components/Dashboard.jsx';
import { Wallet } from './components/Wallet.jsx';

function App() {
    const [walletData, setWalletData] = useState({
        account: null,
        balance: '0.00 ETH',
    });

    const updateWalletData = (account, balance) => {
        setWalletData({
            account,
            balance,
        });
    };

    return (
        <>
            <Header />
            <Dashboard walletData={walletData} />
            <Wallet updateWalletData={updateWalletData} />
        </>
    );
}

export default App;
