import './documentList.scss'
import Button from "../Button/Button";
import PropTypes from 'prop-types';

const DocumentList = (props) => {
    const { cardListInfo, disabled } = props

    return cardListInfo.map((card, i) => {
        const { title, subtitle, id, image, buttonInfo } = card;
        const fixedBorder = () => {
            if (i !== cardListInfo.length - 1) {
                return { borderBottom: 'none' }
            } else return {}
        }
        return (
            <div className='card' style={fixedBorder()} key={id}>
                <div className="card__wrapper">
                    <img src={image} alt="document" className="card_document" />
                    <div className="card__wrapper-text">
                        <div className="card__title">{title}</div>
                        <div className="card__subtitle">{subtitle}</div>
                    </div>
                </div>
                <div className="card__button-wrapper">
                    <Button disabled={disabled} buttonInfo={buttonInfo} />
                </div>
            </div>
        )
    })

}

DocumentList.propTypes = {
    cardListInfo: PropTypes.array,
    disabled: PropTypes.bool
}

DocumentList.defaultProps = {
    disabled: false
}

export default DocumentList