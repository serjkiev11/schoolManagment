import { cn } from '@/lib/utils'
import { Button } from './ui/button'

const Pagination = () => {
  const className =
    'font-semibold disabled:opacity-50 disabled:cursor-not-allowed h-7 p-3 text-xs'
  return (
    <div className='p-4 flex items-center justify-between text-gray-500'>
      <Button className={className} variant='outline'>
        Prev
      </Button>
      <div className='flex items-center gap-1'>
        <Button className={cn('bg-lamaSky', className)} variant='outline'>
          1
        </Button>
        <Button className={className} variant='ghost'>
          2
        </Button>
        <Button className={className} variant='ghost'>
          3
        </Button>
        ...
        <Button className={className} variant='ghost'>
          10
        </Button>
      </div>
      <Button className={className} variant='outline'>
        Next
      </Button>
    </div>
  )
}

export default Pagination
