import { useEffect, useState } from 'react';
import Web3 from 'web3';

// eslint-disable-next-line react/prop-types
export const Wallet = ({ updateWalletData }) => {
    const [web3, setWeb3] = useState(null);
    const [provider, setProvider] = useState(null);
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState('0.00 ETH');
    const [connected, setConnected] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);

            if (window.ethereum.isMetaMask) {
                setProvider('Conectado a Ethereum con MetaMask');
            } else {
                setProvider('Proveedor de Ethereum no es MetaMask');
            }
        } else {
            setError('Por favor, instala MetaMask');
        }
    }, []);

    const connectWallet = async () => {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(accounts[0]);
            setConnected(true);

            // Obtener balance
            const balance = await web3.eth.getBalance(accounts[0]);
            const formattedBalance = web3.utils.fromWei(balance, 'ether') + ' ETH';
            setBalance(formattedBalance);

            updateWalletData(accounts[0], formattedBalance);
        } catch (err) {
            setError('No se pudo conectar a MetaMask');
            console.error(err);
        }
    };

    return (
        <div className='wallet'>
            <h1>Wallet</h1>
            <div className='conexion'>
                {!connected ? (
                    <button onClick={connectWallet}>Conectar Billetera</button>
                ) : (
                    <p>Conectado {account}</p>
                )}
            </div>
            <div className='balance'>
                <h2>Balance</h2>
                <p>{balance}</p>
            </div>
            <div className='error'>
                {error && <p>{error}</p>}
            </div>
            <div className='provider'>
                {provider && <p>{provider}</p>}
            </div>
        </div>
    );
};
