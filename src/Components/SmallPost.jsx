import { useContext } from "react";

import ViewingUserContext from "../Context/ViewingUserContext.jsx"

function SmallPost(props){

    const account = useContext(ViewingUserContext);


    return(
        <>
        {account &&
        <div className="SmallPost" onClick={()=>props.ViewPost(account.postImg, account.accountImg, account.accountName)}>
            <img src={account.postImg} id="miniPostImg"/>
            <div>
                <img src={account.accountImg} id="miniAccImg"/>
                <p>@{account.accountName}</p>
            </div>
        </div>}
        </>
    )
}

export default SmallPost;
