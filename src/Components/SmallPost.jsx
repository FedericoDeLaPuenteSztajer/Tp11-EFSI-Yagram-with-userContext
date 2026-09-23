import { useContext } from "react";
//
import ViewingUserContext from "../Context/ViewingUserContext.jsx"

function SmallPost(props) {

    const account = useContext(ViewingUserContext);

    { console.log(account) }

    return (
        <>
            {(account) &&
                <div className="SmallPost" onClick={() => props.ViewPost(props.postImg, account.accountImg, account.accountName)}>
                    <img src={account.postImg} id="miniPostImg" />
                    <div>
                        <img src={account.accountImg} id="miniAccImg" />
                        <p>@{account.accountName}</p>
                    </div>
                </div>}
            :{
                <div className="SmallPost" onClick={() => props.ViewPost(props.postImg, props.accountImg, props.accountName)}>
                    <img src={props.postImg} id="miniPostImg" />
                    <div>
                        <img src={props.accountImg} id="miniAccImg" />
                        <p>@{props.accountName}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default SmallPost;
