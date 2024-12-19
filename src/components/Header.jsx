import eth from '../assets/eth.svg';

export function Header() {
  return (
    <header>
        <div className='main'>
            <div className='name'>
                <h1>
                    <img src={eth} alt='icon' style={{ width: '4rem', height: '4rem' }}/> ETH Dapp
                </h1>
            </div>
        </div>
    </header>
  );
}