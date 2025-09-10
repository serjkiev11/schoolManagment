import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableRowActionBtns from '@/components/TableRowActionBtns'
import TablePageHeader from '@/components/TablePageHeader'
import { teachersData } from '@/lib/data'
import { Teacher } from '../types'
import { TeacherColumns } from '../tableColumns'
import Image from 'next/image'

const renderRow = (item: Teacher) => {
  const imageName = 'update'

  return (
    <tr
      key={item.id}
      className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'
    >
      <td className='flex items-center  gap-4 py-2'>
        <Image
          src={item.photo}
          alt=''
          width={40}
          height={40}
          className='md:hidden xl:block w-10 h-10 rounded-full object-cover'
        />
        <div className='flex flex-col'>
          <h3 className='font-semibold'>{item.name}</h3>
          <p className='text-xs text-gray-500'>{item?.email}</p>
        </div>
      </td>
      <td className='hidden md:table-cell'>{item.teacherId}</td>
      <td className='hidden md:table-cell'>{item.subjects.join(',')}</td>
      <td className='hidden md:table-cell'>{item.classes.join(',')}</td>
      <td className='hidden lg:table-cell'>{item.phone}</td>
      <td className='hidden lg:table-cell'>{item.address}</td>
      <TableRowActionBtns
        imageName={imageName}
        tableType='teacher'
        data={item}
        id={item.id}
        href={`/list/teachers/${item.id}`}
      />
    </tr>
  )
}

const TeachersListPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      <TablePageHeader
        pageTitle='All Teachers'
        tableType='teacher'
        buttonType='create'
      />
      <Table
        columns={TeacherColumns}
        renderRow={renderRow}
        data={teachersData}
      />
      <Pagination />
    </div>
  )
}

export default TeachersListPage
