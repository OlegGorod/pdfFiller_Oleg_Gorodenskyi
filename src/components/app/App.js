import { useState } from "react";
import DocumentList from "../DocumentList/DocumentList";
import Big from '../../images/Big.png'

const cardListInfo = [
    {
        title: "Rundofase",
        subtitle: "Last Edited: 08/08/2020",
        buttonInfo: {
            type: "primary"
        },
        id: 1,
        image: Big
    },
    {
        title: "Genco Pura Olive Oil Company",
        subtitle: "Last Edited: 08/08/2020",
        buttonInfo: {
            type: "primary"
        },
        id: 2,
        image: Big
    },
    {
        title: "Bubba Gump",
        subtitle: "Last Edited: 08/08/2020",
        buttonInfo: {
            type: "secondary"
        },
        id: 3,
        image: Big
    }
]

const App = () => {

    const [disabled, setDisabled] = useState(false)

    return (
        <div className="app">
            <div className="container">
                <div className="toggleBtn">
                    <input type="checkbox" id="switch" onChange={() => setDisabled(!disabled)} />
                    <label htmlFor="switch" data-on="Normal" data-off="Disabled"></label>
                </div>
                <DocumentList cardListInfo={cardListInfo} disabled={disabled} />
            </div>
        </div>
    )
}



export default App;