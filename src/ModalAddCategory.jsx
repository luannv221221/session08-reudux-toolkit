import { Button, Form, Input, Modal, Space, Switch, notification } from 'antd'
import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { getCategoriesThunk } from './redux/reducres/categorySlice';

const ModalAddCategory = ({ isModalOpen, handleCancel, handleOk }) => {
    const dispath = useDispatch();
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type) => {
        api[type]({
            message: 'Thêm mới thành công'
        });
    };
    const onFinish = (values) => {
        axios.post("http://localhost:8080/api/v1/categories", values).then(response => {
            handleCancel();
            dispath(getCategoriesThunk())
            openNotificationWithIcon('success')
        }).catch(err => console.log(err))
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <>
            <Modal footer={false} title="Thêm mới danh mục" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {contextHolder}

                <Form
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
                    initialValues={{
                        categoryStatus: true,
                    }}
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
            </Modal>
        </>
    )
}

export default ModalAddCategory