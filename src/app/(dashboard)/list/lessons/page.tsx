import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableRowActionBtns from '@/components/TableRowActionBtns'
import TablePageHeader from '@/components/TablePageHeader'
import { lessonsData } from '@/lib/data'
import { Lesson } from '../types'
import { LessonColumns } from '../tableColumns'

const renderRow = (item: Lesson) => {
  const imageName = 'update'

  return (
    <tr
      key={item.id}
      className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'
    >
      <td className='flex items-center  gap-4 py-3'>{item.subject}</td>
      <td>{item.class}</td>
      <td className='hidden md:table-cell'>{item.teacher}</td>
      <TableRowActionBtns
        imageName={imageName}
        tableType='lesson'
        data={item.id}
        id={item.id}
      />
    </tr>
  )
}

const LessonsListPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      <TablePageHeader
        pageTitle='All Lessons'
        tableType='lesson'
        buttonType='create'
      />
      <Table columns={LessonColumns} renderRow={renderRow} data={lessonsData} />
      <Pagination />
    </div>
  )
}

export default LessonsListPage
