'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import InputField from '../InputField'

const schema = z.object({
  student: z.string().min(1, { message: 'Student is required' }),
  class: z.string().min(1, { message: 'Class is required' }),
  date: z.string().min(1, { message: 'Date is required' }),
  status: z.enum(['present', 'absent', 'late'], {
    message: 'Status is required',
  }),
  remarks: z.string().optional(),
})

type Inputs = z.infer<typeof schema>

const AttendanceForm = ({
  type,
  data,
}: {
  type: 'create' | 'update'
  data?: any
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form className='flex flex-col gap-8' onSubmit={onSubmit}>
      <h1 className='text-xl font-semibold'>
        {type === 'create' ? 'Create attendance record' : 'Update attendance'}
      </h1>

      <div className='flex justify-between flex-wrap gap-4 sm:justify-center sm:gap-8'>
        <InputField
          label='Student'
          inputName='student'
          defaultValue={data?.student}
          register={register}
          error={errors?.student}
        />

        <InputField
          label='Class'
          inputName='class'
          defaultValue={data?.class}
          register={register}
          error={errors?.class}
        />

        <InputField
          label='Date'
          inputName='date'
          type='date'
          defaultValue={data?.date}
          register={register}
          error={errors?.date}
        />

        <div className='flex flex-col gap-2 w-full sm:w-1/4'>
          <label className='text-xs text-gray-500'>Status</label>
          <select
            {...register('status')}
            className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full'
            defaultValue={data?.status}
          >
            <option value=''>Select Status</option>
            <option value='present'>Present</option>
            <option value='absent'>Absent</option>
            <option value='late'>Late</option>
          </select>
          {errors.status?.message && (
            <p className='text-xs text-red-400'>
              {errors.status?.message.toString()}
            </p>
          )}
        </div>

        <div className='flex flex-col gap-2 w-full sm:w-1/2'>
          <label className='text-xs text-gray-500'>Remarks</label>
          <textarea
            {...register('remarks')}
            className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full h-20 resize-none'
            defaultValue={data?.remarks}
          />
          {errors.remarks?.message && (
            <p className='text-xs text-red-400'>
              {errors.remarks?.message.toString()}
            </p>
          )}
        </div>
      </div>

      <button className='bg-blue-400 text-white p-2 rounded-md'>
        {type === 'create' ? 'Create' : 'Update'}
      </button>
    </form>
  )
}

export default AttendanceForm
