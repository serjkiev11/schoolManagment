import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableRowActionBtns from '@/components/TableRowActionBtns'
import TablePageHeader from '@/components/TablePageHeader'
import { assignmentsData } from '@/lib/data'
import { Assignment } from '../types'
import { AssignmentColumns } from '../tableColumns'

const renderRow = (item: Assignment) => {
  const imageName = 'update'

  return (
    <tr
      key={item.id}
      className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'
    >
      <td className='flex items-center  gap-4 py-3'>{item.subject}</td>
      <td>{item.class}</td>
      <td className='hidden md:table-cell'>{item.teacher}</td>
      <td className='hidden md:table-cell'>{item.dueDate}</td>
      <TableRowActionBtns
        imageName={imageName}
        tableType='assignment'
        data={item}
        id={item.id}
      />
    </tr>
  )
}

const AssignmentsListPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      <TablePageHeader
        pageTitle='All Assignments'
        tableType='assignment'
        buttonType='create'
      />
      <Table
        columns={AssignmentColumns}
        renderRow={renderRow}
        data={assignmentsData}
      />
      <Pagination />
    </div>
  )
}

export default AssignmentsListPage
