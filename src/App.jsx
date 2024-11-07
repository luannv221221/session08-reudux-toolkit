import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import ProductDetail from './ProductDetail'
import { Pagination, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesThunk } from './redux/reducres/categorySlice'

function App() {
  const dispath = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const dataAPI = useSelector((state) => state.category.data);
  useEffect(() => {
    dispath(getCategoriesThunk({ page: currentPage }));
  }, [])

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
      <Header />
      {/* <ProductDetail /> */}

      <Table dataSource={dataAPI} columns={columns} pagination={false} />
      <Pagination defaultCurrent={1} total={50} />
    </>
  )
}

export default App
