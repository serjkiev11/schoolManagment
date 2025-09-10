import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableRowActionBtns from '@/components/TableRowActionBtns'
import TablePageHeader from '@/components/TablePageHeader'
import { eventsData } from '@/lib/data'
import { Event } from '../types'
import { EventColumns } from '../tableColumns'

const renderRow = (item: Event) => {
  const imageName = 'update'

  return (
    <tr
      key={item.id}
      className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'
    >
      <td className='flex items-center  gap-4 py-3'>{item.title}</td>
      <td>{item.class}</td>
      <td className='hidden md:table-cell'>{item.date}</td>
      <td className='hidden md:table-cell'>{item.startTime}</td>
      <td className='hidden md:table-cell'>{item.endTime}</td>
      <TableRowActionBtns
        imageName={imageName}
        tableType='event'
        data={item}
        id={item.id}
      />
    </tr>
  )
}

const EventsListPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      <TablePageHeader
        pageTitle='All Events'
        tableType='event'
        buttonType='create'
      />
      <Table columns={EventColumns} renderRow={renderRow} data={eventsData} />
      <Pagination />
    </div>
  )
}

export default EventsListPage
