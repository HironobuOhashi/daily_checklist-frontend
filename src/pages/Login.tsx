import {useHistory} from "react-router-dom";

export const Login = () => {
    const history = useHistory();

    // ログイン処理
    const onClickLogin = () => {
        history.push("/home");
    }



    return (

        <div>
            <h1>Googleでログインしてね</h1>
            <p>ここにgoogleボタン</p>
            <button onClick={onClickLogin}>ログイン</button>
        </div>

    )
}