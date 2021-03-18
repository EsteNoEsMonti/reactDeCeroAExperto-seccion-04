import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Typography } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined, RetweetOutlined } from '@ant-design/icons';

const { Title } = Typography;

const CounterApp = ({ valor = 1997 }) => {

  // State ---
  const [counter, setCounter] = useState(valor);

  // add reset and remove ---
  const handleAdd = (e) => {
    setCounter(counter + 1);

    //puede recibir una funcion cuyo retorno sea el nuevo valor
    // setCounter((c) => c + 1);
  };

  const handleRemove = (e) => {
    setCounter(counter - 1);
  };

  const handleReset = (e) => {
    setCounter(valor);
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Title level={1} style={{ color: 'white' }}>Counter App</Title>
        <Title level={2} style={{ color: 'white' }} id="test_counter">{counter}</Title>

        <Button
          type="default"
          onClick={handleRemove}
          style={{ margin: 15 }}
        >
          <MinusCircleOutlined />1
              </Button>
        <Button
          ghost
          onClick={handleReset}
          style={{ margin: 15 }}
        >
          <RetweetOutlined /> Reset
              </Button>
        <Button
          type="primary"
          onClick={handleAdd}
          style={{ margin: 15 }}
        >
          <PlusCircleOutlined />1
              </Button>
      </div>
    </>
  );
};

CounterApp.propTypes = {
  valor: PropTypes.number
};

export default CounterApp;







// import React, { useState/*, useEffect*/ } from 'react';
// import PropTypes from 'prop-types';
// import { Button, Typography/*, message, Card, Form, InputNumber*/ } from 'antd';
// import { PlusCircleOutlined, MinusCircleOutlined, RetweetOutlined } from '@ant-design/icons';

// // const layout = {
// //   labelCol: {
// //     span: 8,
// //   },
// //   wrapperCol: {
// //     span: 16,
// //   },
// // };
// // const tailLayout = {
// //   wrapperCol: {
// //     offset: 8,
// //     span: 16,
// //   },
// // };

// const { Title } = Typography;

// const CounterApp = ({ valor = 1997 }) => {

//   // State ---
//   // const [showCounter, setShowCounter] = useState(false);
//   const [counter, setCounter] = useState(valor);
//   // const [valorForm, setValorForm] = useState(valor);

//   // const [form] = Form.useForm();

//   // add reset and remove ---
//   const handleAdd = (e) => {
//     setCounter(counter + 1);

//     //puede recibir una funcion cuyo retorno sea el nuevo valor
//     // setCounter((c) => c + 1);
//   };

//   const handleRemove = (e) => {
//     setCounter(counter - 1);
//   };

//   const handleReset = (e) => {
//     // setCounter(valorForm);
//     setCounter(valor);
//   };

//   // // Fn form ---
//   // const onFinish = (values) => {
//   //   setCounter(values.valueInput);
//   //   setValorForm(values.valueInput);

//   //   form.setFieldsValue({
//   //     valueInput: values.valueInput
//   //   });

//   //   setShowCounter(true);
//   //   message.success('Valor seteado correctamente, disfrute su contador', 10);
//   // };

//   // useEffect(() => {
//   //   if (valor) {
//   //     form.setFieldsValue({
//   //       valueInput: valor
//   //     });
//   //   };
//   // });

//   return (
//     // <>
//     //   {
//     //     !showCounter ?
//     //       <>
//     //         <Title level={4} style={{ color: 'white' }}>El valor por defecto se lo pasa como prop desde el componente padre</Title>
//     //         <Card>
//     //           <Form
//     //             {...layout}
//     //             name="basic"
//     //             initialValues={{
//     //               remember: true,
//     //             }}
//     //             onFinish={onFinish}
//     //             form={form}
//     //           >
//     //             <Form.Item
//     //               label="Ingrese un valor"
//     //               name="valueInput"
//     //               rules={[
//     //                 {
//     //                   required: true,
//     //                   message: 'Please input your value!',
//     //                 },
//     //               ]}
//     //             >
//     //               <InputNumber style={{ width: '100%' }} />
//     //             </Form.Item>

//     //             <Form.Item {...tailLayout}>
//     //               <Button type="primary" htmlType="submit">
//     //                 Enviar valor
//     //             </Button>
//     //             </Form.Item>

//     //           </Form>
//     //         </Card>
//     //       </>
//     //       :
//     <>
//       <div style={{ textAlign: 'center' }}>
//         <Title level={1} style={{ color: 'white' }}>Counter App</Title>
//         <Title level={2} style={{ color: 'white' }}>{counter}</Title>

//         <Button
//           type="default"
//           onClick={handleRemove}
//           style={{ margin: 15 }}
//         >
//           <MinusCircleOutlined />1
//               </Button>
//         <Button
//           ghost
//           onClick={handleReset}
//           style={{ margin: 15 }}
//         >
//           <RetweetOutlined /> Reset
//               </Button>
//         <Button
//           type="primary"
//           onClick={handleAdd}
//           style={{ margin: 15 }}
//         >
//           <PlusCircleOutlined />1
//               </Button>
//       </div>
//     </>
//     //   }
//     // </>
//   );
// };

// CounterApp.propTypes = {
//   valor: PropTypes.number
// };

// export default CounterApp;