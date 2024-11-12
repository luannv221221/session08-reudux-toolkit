import React, { useEffect, useState } from 'react'
import { Button, Modal, Pagination, Spin, Table, Tag, notification } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesThunk } from './redux/reducres/categorySlice'
import ModalCategory from './ModalCategory'
import axios from 'axios'
const Category = () => {
    const dispath = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const dataAPI = useSelector((state) => state.category.data);
    const isLoading = useSelector(state => state.category.loading);
    const totalElement = useSelector(state => state.category.totalElement);
    const pageSize = useSelector(state => state.category.pageSize);
    const [flag, setFlag] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState()
    const showModal = () => {
        setId();
        setIsModalOpen(true);
    };
    const handeleEdit = (id) => {
        setId(id)
        setIsModalOpen(true)
    };
    const handeleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/v1/categories/${id}`).then(res => {
            notification.success({ message: 'xóa thành công' })
            dispath(getCategoriesThunk({ page: currentPage }));
        }).catch(err => console.log(err))
    }
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        dispath(getCategoriesThunk({ page: currentPage }));
    }, [flag])

    const onChangePage = (currentPage) => {
        setCurrentPage(currentPage);
        setFlag(!flag);
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'categoryId',
            key: 'categoryId',
        },
        {
            title: 'categoryName',
            dataIndex: 'categoryName',
            key: 'categoryName',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Status',
            dataIndex: 'categoryStatus',
            key: 'categoryStatus',
            render: (categoryStatus) => (
                <Tag color={categoryStatus ? 'blue' : 'red'}>{categoryStatus ? 'Active' : 'Inactive'}</Tag>
            )

        },
        {
            title: 'Action',
            dataIndex: 'categoryId',
            render: (categoryId) => (
                <>
                    <Button onClick={() => handeleEdit(categoryId)}>Edit</Button>
                    <Button color='red' onClick={() => handeleDelete(categoryId)}>Delete</Button>
                </>

            )
        },
    ];
    return (
        <>
            {isLoading ? <Spin /> :
                <>
                    <Button type="primary" onClick={showModal}>
                        Thêm mới
                    </Button>
                    <Table dataSource={dataAPI} columns={columns} rowKey={record => record.categoryId} pagination={false} />
                    <Pagination
                        current={currentPage}
                        total={totalElement}
                        pageSize={pageSize}
                        onChange={(currentPage) => onChangePage(currentPage)} />
                    <ModalCategory id={id} handleCancel={handleCancel} isModalOpen={isModalOpen} handleOk={handleOk} />
                </>}

        </>
    )
}

export default Category