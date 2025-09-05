import { Search } from 'lucide-react'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'

type TableSearchProps = {
  placeholder?: string
  className?: string
}

const TableSearch = ({
  placeholder = 'Search...',
  className,
}: TableSearchProps) => {
  return (
    <div className='relative w-full md:w-[250px]'>
      <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
        <Search size={18} />
      </span>
      <Input
        type='text'
        placeholder={placeholder}
        className={cn('pl-10 rounded-full text-sm', className)}
      />
    </div>
  )
}

export default TableSearch
