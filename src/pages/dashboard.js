import Footer from '../components/Footer';
import SignIn from '../components/Signin';

const Dashboard = (m) => {
  const pricesWs = new WebSocket(
    'wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin'
  );
  pricesWs.onmessage = (msg) => {
    const m = JSON.parse(msg.data);
    const bitcoin__ = m.bitcoin;
    if (bitcoin__ !== undefined) {
      /*       document.getElementById('btc').innerText = bitcoin__;
       */
    }
  };

  return (
    <>
      <SignIn />
      <Footer />
    </>
  );
};

export default Dashboard;
