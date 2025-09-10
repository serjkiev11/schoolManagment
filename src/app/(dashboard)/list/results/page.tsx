import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableRowActionBtns from '@/components/TableRowActionBtns'
import TablePageHeader from '@/components/TablePageHeader'
import { resultsData } from '@/lib/data'
import { Result } from '../types'
import { ResultColumns } from '../tableColumns'

const renderRow = (item: Result) => {
  const imageName = 'update'

  return (
    <tr
      key={item.id}
      className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'
    >
      <td className='flex items-center  gap-4 py-3'>{item.subject}</td>
      <td>{item.student}</td>
      <td className='hidden md:table-cell'>{item.score}</td>
      <td className='hidden md:table-cell'>{item.teacher}</td>
      <td className='hidden md:table-cell'>{item.class}</td>
      <td className='hidden md:table-cell'>{item.date}</td>
      <TableRowActionBtns
        imageName={imageName}
        tableType='result'
        data={item.id}
        id={item.id}
      />
    </tr>
  )
}

const ResultsListPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      <TablePageHeader
        pageTitle='All Results'
        tableType='result'
        buttonType='create'
      />
      <Table columns={ResultColumns} renderRow={renderRow} data={resultsData} />
      <Pagination />
    </div>
  )
}

export default ResultsListPage
