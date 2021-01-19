import {
  DashboardContainer,
  DashboardItem,
} from '../components/dashboard/DashboardElements';
import Navbar from '../components/Navbar';
import Dashboard1 from '../components/dashboard/index';
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
      <Navbar />
      <Dashboard1 />
    </>
  );
};

export default Dashboard;
