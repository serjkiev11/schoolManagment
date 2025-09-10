import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableRowActionBtns from '@/components/TableRowActionBtns'
import TablePageHeader from '@/components/TablePageHeader'
import { announcementsData } from '@/lib/data'
import { Announcement } from '../types'
import { AnnouncemetColumns } from '../tableColumns'

const renderRow = (item: Announcement) => {
  const imageName = 'update'

  return (
    <tr
      key={item.id}
      className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'
    >
      <td className='flex items-center  gap-4 py-3'>{item.title}</td>
      <td>{item.class}</td>
      <td className='hidden md:table-cell'>{item.date}</td>
      <TableRowActionBtns
        imageName={imageName}
        tableType='announcement'
        data={item}
        id={item.id}
      />
    </tr>
  )
}

const AnnouncementsListPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      <TablePageHeader
        pageTitle='All Announcements'
        tableType='announcement'
        buttonType='create'
      />
      <Table
        columns={AnnouncemetColumns}
        renderRow={renderRow}
        data={announcementsData}
      />
      <Pagination />
    </div>
  )
}

export default AnnouncementsListPage
