import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const Page2 = () => {
    const nav = useNavigate();
    return (
        <>
        <Button onClick={() => nav("/page1")} type="primary" >去page1</Button>
        </>
    )
}
export default Page2;