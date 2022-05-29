import "./FavoriteCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

interface FavoriteCardProps {
    title:string
    iconUrl:string
    price:string
}

const FavoriteCard = ({title, iconUrl, price} : FavoriteCardProps) => {

    return <div className="favorite-card">
                <div className="card-gradient">
                    <section className="info-section">
                        <div>
                            <img src={iconUrl} alt={`Icon for ${title}`}/>
                            <h1>{title}</h1>
                        </div>
                        <div className="actual-price">
                            <div className="change-value">
                                <p className="high-value">$1800 <FontAwesomeIcon icon={faCaretUp} /></p>
                                <p className="low-value">$1700 <FontAwesomeIcon icon={faCaretDown} /></p>
                            </div>
                            <h1>$38000</h1>
                        </div>
                    </section>
                    <section className="crypto-amount prices-section">
                        <span>64.78965,7852</span>
                        <div className="price-crypto">${price}</div>
                    </section>
                </div>
            </div>

}

export default FavoriteCard;