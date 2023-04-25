import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Back from "../components/Back";
import Link from 'next/link'
import { Button, Checkbox, Form, Input } from "antd";

export default function Login() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {/* <main className={styles.main}> */}
        <div className="auth-page">
          <div className="form-card">
            <br />
          <br />
          <h1 className="app-color">Login</h1>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!", type: 'email' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Login
              </Button>
                &nbsp;&nbsp;&nbsp;
              <Back />
        
            </Form.Item>
            Don't have an Account? <Link href={'/register'}>Register</Link> | &nbsp;
            <Link href={'/'}>Home</Link>
            </Form>
          </div>
        </div>
      {/* </main> */}
    </>
  );
}
