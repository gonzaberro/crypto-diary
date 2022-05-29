import FavoriteCard from "../Cards/FavoriteCard";
import "./MainPage.css";

const MainPage = () => {
    return <div className="favorite-section">
            <FavoriteCard title="Bitcoin" iconUrl="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579" price="29.000"/>
            <FavoriteCard title="Etherium" iconUrl="https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880" price="1.789"/>
            <FavoriteCard title="Plkadot" iconUrl="https://assets.coingecko.com/coins/images/12171/thumb/polkadot.png?1639712644" price="9.54"/>
            <FavoriteCard title="Plkadot" iconUrl="https://assets.coingecko.com/coins/images/12171/thumb/polkadot.png?1639712644" price="9.54"/>
        </div>
}

export default MainPage;