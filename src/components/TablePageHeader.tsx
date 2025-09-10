import Image from 'next/image'
import TableSearch from './TableSearch'
import { role } from '@/lib/data'
import FormModal, { ButtonType, TableType } from './FormModal'

const TablePageHeader = ({
  pageTitle,
  tableType,
  buttonType,
  data,
  id,
}: {
  pageTitle: string
  tableType: TableType
  buttonType: ButtonType
  data?: any
  id?: number
}) => {
  return (
    <div className='flex items-center justify-between'>
      <h1 className='hidden md:block text-lg font-semibold'>{pageTitle}</h1>
      <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
        <div className='w-full md:w-auto items-center'>
          <TableSearch placeholder='Search' className='w-full md:w-auto' />
        </div>
        <div className='flex items-center gap-4 self-end'>
          <button className='w-8 h-8 flex items-center rounded-full justify-center bg-lamaYellow'>
            <Image src='/filter.png' alt='' width={14} height={14} />
          </button>
          <button className='w-8 h-8 flex items-center rounded-full justify-center bg-lamaYellow'>
            <Image src='/sort.png' alt='' width={14} height={14} />
          </button>
          {role === 'admin' && (
            // <button className='w-8 h-8 flex items-center rounded-full justify-center bg-lamaYellow'>
            //   <Image src='/plus.png' alt='' width={14} height={14} />
            // </button>
            <FormModal table={tableType} type={buttonType} />
          )}
        </div>
      </div>
    </div>
  )
}

export default TablePageHeader
