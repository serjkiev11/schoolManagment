'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import InputField from '../InputField'

const schema = z.object({
  name: z.string().min(1, { message: 'Class name is required' }),
  grade: z.string().min(1, { message: 'Grade is required' }),
  section: z.string().min(1, { message: 'Section is required' }),
  capacity: z.number().min(1, { message: 'Capacity must be at least 1' }),
  supervisor: z.string().min(1, { message: 'Supervisor is required' }),
  academicYear: z.string().min(1, { message: 'Academic year is required' }),
})

type Inputs = z.infer<typeof schema>

const ClassForm = ({
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
        {type === 'create' ? 'Create a new class' : 'Update class'}
      </h1>

      <div className='flex justify-between flex-wrap gap-4 sm:justify-center sm:gap-8'>
        <InputField
          label='Class Name'
          inputName='name'
          defaultValue={data?.name}
          register={register}
          error={errors?.name}
        />

        <div className='flex flex-col gap-2 w-full sm:w-1/4'>
          <label className='text-xs text-gray-500'>Grade</label>
          <select
            {...register('grade')}
            className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full'
            defaultValue={data?.grade}
          >
            <option value=''>Select Grade</option>
            <option value='1'>1st Grade</option>
            <option value='2'>2nd Grade</option>
            <option value='3'>3rd Grade</option>
            <option value='4'>4th Grade</option>
            <option value='5'>5th Grade</option>
            <option value='6'>6th Grade</option>
            <option value='7'>7th Grade</option>
            <option value='8'>8th Grade</option>
            <option value='9'>9th Grade</option>
            <option value='10'>10th Grade</option>
            <option value='11'>11th Grade</option>
            <option value='12'>12th Grade</option>
          </select>
          {errors.grade?.message && (
            <p className='text-xs text-red-400'>
              {errors.grade?.message.toString()}
            </p>
          )}
        </div>

        <InputField
          label='Section'
          inputName='section'
          defaultValue={data?.section}
          register={register}
          error={errors?.section}
        />

        <InputField
          label='Capacity'
          inputName='capacity'
          type='number'
          defaultValue={data?.capacity}
          register={register}
          error={errors?.capacity}
        />

        <InputField
          label='Supervisor'
          inputName='supervisor'
          defaultValue={data?.supervisor}
          register={register}
          error={errors?.supervisor}
        />

        <div className='flex flex-col gap-2 w-full sm:w-1/4'>
          <label className='text-xs text-gray-500'>Academic Year</label>
          <select
            {...register('academicYear')}
            className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full'
            defaultValue={data?.academicYear}
          >
            <option value=''>Select Year</option>
            <option value='2024-2025'>2024-2025</option>
            <option value='2025-2026'>2025-2026</option>
            <option value='2026-2027'>2026-2027</option>
          </select>
          {errors.academicYear?.message && (
            <p className='text-xs text-red-400'>
              {errors.academicYear?.message.toString()}
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

export default ClassForm
