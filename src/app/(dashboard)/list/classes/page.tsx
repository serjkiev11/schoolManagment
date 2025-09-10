import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableRowActionBtns from '@/components/TableRowActionBtns'
import TablePageHeader from '@/components/TablePageHeader'
import { classesData } from '@/lib/data'
import { Class } from '../types'
import { ClassesColumns } from '../tableColumns'

const renderRow = (item: Class) => {
  const imageName = 'update'

  return (
    <tr
      key={item.id}
      className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'
    >
      <td className='flex items-center  gap-4 py-3'>{item.name}</td>
      <td className='hidden md:table-cell'>{item.grade}</td>
      <td className='hidden md:table-cell'>{item.capacity}</td>
      <td className='hidden md:table-cell'>{item.supervisor}</td>
      <TableRowActionBtns
        imageName={imageName}
        tableType='class'
        data={item.id}
        id={item.id}
      />
    </tr>
  )
}

const ClassesListPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      <TablePageHeader
        pageTitle='All Classes'
        tableType='class'
        buttonType='create'
      />
      <Table
        columns={ClassesColumns}
        renderRow={renderRow}
        data={classesData}
      />
      <Pagination />
    </div>
  )
}

export default ClassesListPage
