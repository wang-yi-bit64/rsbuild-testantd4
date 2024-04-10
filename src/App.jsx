import './App.css';
import {useRef} from "react"
import { Button , Input} from 'antd';
import UseFilter from "./components/useForm"

const App = () => {
  const beforeAirSapceFilterRef = useRef()
  const clickHandler = () => {
    console.log("beforeAirSapceFilterRef", beforeAirSapceFilterRef)
  }
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
        <Button type="primary" onClick={clickHandler}>Hello</Button>
        <UseFilter
          ref={beforeAirSapceFilterRef}
          row={4}
          dataSource={[
            {
              label: "姓名",
              name: "name",
              children: <Input
                style={{width: "100%"}}
                placeholder="请输入姓名"
              />,
              required: true,
              labelAlign: "left",
              labelCol: {xs: 24, md: 7, sm: 7},
              options: {
                initialValue: undefined,
                rules: [
                  {required: true, message: "姓名不能为空"},
                ]
              }
            }
          ]}
      />
    </div>
  );
};

export default App;
