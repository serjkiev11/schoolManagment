import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableRowActionBtns from '@/components/TableRowActionBtns'
import TablePageHeader from '@/components/TablePageHeader'
import { subjectsData } from '@/lib/data'
import { Subject } from '../types'
import { SubjectColumns } from '../tableColumns'

const renderRow = (item: Subject) => {
  const imageName = 'update'

  return (
    <tr
      key={item.id}
      className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'
    >
      <td className='flex items-center  gap-4 py-3'>{item.name}</td>
      <td className='hidden md:table-cell'>{item.teachers.join(',')}</td>
      <TableRowActionBtns
        imageName={imageName}
        tableType='subject'
        data={item.id}
        id={item.id}
      />
    </tr>
  )
}

const SubjectsListPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      <TablePageHeader
        pageTitle='All Subjects'
        tableType='subject'
        buttonType='create'
      />
      <Table
        columns={SubjectColumns}
        renderRow={renderRow}
        data={subjectsData}
      />
      <Pagination />
    </div>
  )
}

export default SubjectsListPage
