import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableRowActionBtns from '@/components/TableRowActionBtns'
import TablePageHeader from '@/components/TablePageHeader'
import { examsData } from '@/lib/data'
import { Exam } from '../types'
import { ExamColumns } from '../tableColumns'

const renderRow = (item: Exam) => {
  const imageName = 'update'

  return (
    <tr
      key={item.id}
      className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'
    >
      <td className='flex items-center  gap-4 py-3'>{item.subject}</td>
      <td>{item.class}</td>
      <td className='hidden md:table-cell'>{item.teacher}</td>
      <td className='hidden md:table-cell'>{item.date}</td>
      <TableRowActionBtns
        imageName={imageName}
        tableType='exam'
        data={item.id}
        id={item.id}
      />
    </tr>
  )
}

const EventsListPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      <TablePageHeader
        pageTitle='All Exams'
        tableType='exam'
        buttonType='create'
      />
      <Table columns={ExamColumns} renderRow={renderRow} data={examsData} />
      <Pagination />
    </div>
  )
}

export default EventsListPage
