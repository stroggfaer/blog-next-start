'use client'
import React from 'react';
import styles from './style.module.scss';
import { Button, Checkbox, Form, Input } from 'antd';
import { FieldType } from "../types";
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "@/stores/store";
import { setAuthToken } from "@/stores/redux/auth";
import { useAuthStore } from "@/stores/hooks/useAuthStore";


const LoginForm = () => {
    const { accessToken, refreshToken } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const { authLogin } = useAuthStore();
    const onSubmit = async (values: any) => {
        console.log('onSubmit Success:', values);
        const body = {
            username: values.username,
            password:  values.password,
        }
        await authLogin(body);
      //  await dispatch(setToken(token));
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={`${styles.container} ${styles.loginForm}`}>
            accessToken: +{accessToken}+
            refreshToken: +{refreshToken}+
            <Form
                name="loginForm"
                labelCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onSubmit}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item className={'space-between'}>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Link className="login-form-forgot"  href={'/'}>Forgot password</Link>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;

