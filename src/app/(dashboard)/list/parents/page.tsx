import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableRowActionBtns from '@/components/TableRowActionBtns'
import TablePageHeader from '@/components/TablePageHeader'
import { parentsData } from '@/lib/data'
import { Parent } from '../types'
import { ParentColumns } from '../tableColumns'

const renderRow = (item: Parent) => {
  const imageName = 'update'

  return (
    <tr
      key={item.id}
      className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'
    >
      <td className='flex items-center  gap-4 py-2'>
        <div className='flex flex-col'>
          <h3 className='font-semibold'>{item.name}</h3>
          <p className='text-xs text-gray-500'>{item?.email}</p>
        </div>
      </td>
      <td className='hidden md:table-cell'>{item.students.join(',')}</td>
      <td className='hidden lg:table-cell'>{item.phone}</td>
      <td className='hidden lg:table-cell'>{item.address}</td>
      <TableRowActionBtns
        imageName={imageName}
        tableType='parent'
        data={item.id}
        id={item.id}
      />
    </tr>
  )
}

const ParentsListPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      <TablePageHeader
        pageTitle='All Parents'
        tableType='parent'
        buttonType='create'
      />
      <Table columns={ParentColumns} renderRow={renderRow} data={parentsData} />
      <Pagination />
    </div>
  )
}

export default ParentsListPage
