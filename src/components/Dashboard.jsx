// eslint-disable-next-line react/prop-types
export const Dashboard = ({ walletData }) => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <section className="wallet-info">
                <div className="wallet-balance">
                    <h2>Balance</h2>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p>{!walletData.balance ? '0 ETH' : walletData.balance}</p>
                </div>
                <div className="wallet-address">
                    <h2>Dirección</h2>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p>{walletData.account ? walletData.account : 'No conectado'}</p>
                </div>
            </section>
            <section className="transaction-history">
                <h2>Historial de Transacciones</h2>
                <ul>
                    <li>No hay transacciones recientes.</li>
                </ul>
            </section>
        </div>
    );
};

export default Dashboard;