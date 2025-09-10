'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import InputField from '../InputField'

const schema = z.object({
  subject: z.string().min(1, { message: 'Subject is required' }),
  class: z.string().min(1, { message: 'Class is required' }),
  teacher: z.string().min(1, { message: 'Teacher is required' }),
  date: z.string().min(1, { message: 'Date is required' }),
  startTime: z.string().min(1, { message: 'Start time is required' }),
  endTime: z.string().min(1, { message: 'End time is required' }),
  room: z.string().min(1, { message: 'Room is required' }),
})

type Inputs = z.infer<typeof schema>

const LessonForm = ({
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
        {type === 'create' ? 'Create a new lesson' : 'Update lesson'}
      </h1>

      <div className='flex justify-between flex-wrap gap-4 sm:justify-center sm:gap-8'>
        <InputField
          label='Subject'
          inputName='subject'
          defaultValue={data?.subject}
          register={register}
          error={errors?.subject}
        />

        <InputField
          label='Class'
          inputName='class'
          defaultValue={data?.class}
          register={register}
          error={errors?.class}
        />

        <InputField
          label='Teacher'
          inputName='teacher'
          defaultValue={data?.teacher}
          register={register}
          error={errors?.teacher}
        />

        <InputField
          label='Date'
          inputName='date'
          type='date'
          defaultValue={data?.date}
          register={register}
          error={errors?.date}
        />

        <InputField
          label='Start Time'
          inputName='startTime'
          type='time'
          defaultValue={data?.startTime}
          register={register}
          error={errors?.startTime}
        />

        <InputField
          label='End Time'
          inputName='endTime'
          type='time'
          defaultValue={data?.endTime}
          register={register}
          error={errors?.endTime}
        />

        <InputField
          label='Room'
          inputName='room'
          defaultValue={data?.room}
          register={register}
          error={errors?.room}
        />
      </div>

      <button className='bg-blue-400 text-white p-2 rounded-md'>
        {type === 'create' ? 'Create' : 'Update'}
      </button>
    </form>
  )
}

export default LessonForm
