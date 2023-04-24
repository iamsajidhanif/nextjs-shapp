import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Back from "../components/Back";
import { Button, Form, Input, message } from "antd";
import { registerUser } from "../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function Register() {
  const dispatch = useDispatch()
  const users = useSelector((state: any) => state?.authReducer?.users)
  console.log('users', users)

  const onFinish = (values: any) => {
    console.log("Success:", values);
    if (!values?.fullName || !values?.email || !values?.password) {
      return message.error("All Feilds Required!");
    } else if (values?.password?.length < 6) {
      return message.error("Password must be atleast 6 characters!");
    }
    dispatch(registerUser(values))
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
          <h1>Register</h1>
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
              label="Full Name"
              name="fullName"
              rules={[
                { required: true, message: "Please input your Full Name!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: "email",
                },
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

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
              Register
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Back />
            </Form.Item>
            Already have an Account? <Link href={"/login"}>Login</Link> | &nbsp;
            <Link href={'/'}>Home</Link>
          </Form>
        </div>
      </div>
      {/* </main> */}
    </>
  );
}
