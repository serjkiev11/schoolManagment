import { role } from '@/lib/data'
import FormModal, { ButtonType, TableType } from './FormModal'
import Link from 'next/link'
import Image from 'next/image'

type TableRowActionBtnsProps = {
  imageName: ButtonType
  tableType: TableType
  buttonType?: ButtonType
  data?: any
  id?: number
  href?: string
}

const TableRowActionBtns = ({
  imageName,
  tableType,
  buttonType = 'delete',
  data,
  id,
  href,
}: TableRowActionBtnsProps) => {
  // Для teachers и students показываем кнопку всегда с ссылкой
  if (tableType === 'teacher' || tableType === 'student') {
    return (
      <td>
        <div className='flex items-center gap-2'>
          {href ? (
            <Link
              href={href}
              className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky'
            >
              <Image src='/view.png' alt='' width={16} height={16} />
            </Link>
          ) : (
            <FormModal
              table={tableType}
              type={imageName}
              data={data}
              id={data?.id}
            />
          )}
          {role === 'admin' && (
            <FormModal table={tableType} type={buttonType} id={id} />
          )}
        </div>
      </td>
    )
  }

  // Для всех остальных tableType оставляем как было
  return (
    <td>
      <div className='flex items-center gap-2'>
        {role === 'admin' && (
          <>
            <FormModal
              table={tableType}
              type={imageName}
              data={data}
              id={data?.id}
            />
            <FormModal table={tableType} type={buttonType} id={id} />
          </>
        )}
      </div>
    </td>
  )
}

export default TableRowActionBtns
