import { Button, Form, Input, Modal, Space, Switch, notification } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCategoriesThunk } from './redux/reducres/categorySlice';

const ModalCategory = ({ id, isModalOpen, handleCancel, handleOk }) => {
    const dispath = useDispatch();
    const [form] = Form.useForm();
    const onFinish = (values) => {
        if (id) {
            axios.put(`http://localhost:8080/api/v1/categories/${id}`, values).then(response => {
                handleCancel();
                dispath(getCategoriesThunk())
                notification.success({ message: 'Cập nhật thành công' })
            }).catch(err => console.log(err))
        } else {
            axios.post("http://localhost:8080/api/v1/categories", values).then(response => {
                handleCancel();
                dispath(getCategoriesThunk())
                notification.success({ message: 'Thêm mới thành công' })
            }).catch(err => console.log(err))
        }

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/api/v1/categories/${id}`).then(response => {
                // cập nhật giá trị của form 
                form.setFieldsValue(response.data);
            }).catch(err => console.log(err));
            console.log("Có");
        } else {
            form.resetFields()
        }
        console.log(id);
    }, [id])
    return (
        <>
            <Modal footer={false} title={id ? 'Cập nhật' : 'Thêm mới'} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>


                <Form
                    form={form}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{ categoryStatus: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Category Name"
                        name="categoryName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your categoryName!',
                            },
                        ]}

                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Category Dess"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your categoryName!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="category Status"
                        name="categoryStatus"

                    >
                        <Switch defaultChecked onChange={onChange} />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal >
        </>
    )
}

export default ModalCategory