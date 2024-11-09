import React, { useEffect, useState } from 'react'
import { Pagination, Spin, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesThunk } from './redux/reducres/categorySlice'
const Category = () => {
    const dispath = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const dataAPI = useSelector((state) => state.category.data);
    const isLoading = useSelector(state => state.category.loading);
    const totalElement = useSelector(state => state.category.totalElement);
    const pageSize = useSelector(state => state.category.pageSize);
    const [flag, setFlag] = useState(true);
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
        }
    ];
    return (
        <>
            {isLoading ? <Spin /> :
                <>
                    <Table dataSource={dataAPI} columns={columns} rowKey={record => record.categoryId} pagination={false} />
                    <Pagination
                        current={currentPage}
                        total={totalElement}
                        pageSize={pageSize}
                        onChange={(currentPage) => onChangePage(currentPage)} />
                </>}

        </>
    )
}

export default Category