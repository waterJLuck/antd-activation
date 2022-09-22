import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const Page1 = () => {
    const [count, setCount] = useState(0);
    const nav = useNavigate();
    const add = () => {
        let num = count;
        num++;
        setCount(num)
    }
    return (
        <>
        <Button onClick={() => nav("/page2")} type="primary" style={{ marginRight: 10 }}>去page2</Button>
        <Button onClick={add} type="primary">点我更改</Button>
        <div>{count}</div>
        </>
    )
}
export default Page1;