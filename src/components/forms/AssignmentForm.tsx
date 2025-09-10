'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import InputField from '../InputField'

const schema = z.object({
  title: z.string().min(1, { message: 'Assignment title is required' }),
  description: z.string().optional(),
  subject: z.string().min(1, { message: 'Subject is required' }),
  class: z.string().min(1, { message: 'Class is required' }),
  teacher: z.string().min(1, { message: 'Teacher is required' }),
  dueDate: z.string().min(1, { message: 'Due date is required' }),
  maxMarks: z.number().min(1, { message: 'Maximum marks is required' }),
})

type Inputs = z.infer<typeof schema>

const AssignmentForm = ({
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
        {type === 'create' ? 'Create a new assignment' : 'Update assignment'}
      </h1>

      <div className='flex justify-between flex-wrap gap-4 sm:justify-center sm:gap-8'>
        <InputField
          label='Assignment Title'
          inputName='title'
          defaultValue={data?.title}
          register={register}
          error={errors?.title}
        />

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
          label='Due Date'
          inputName='dueDate'
          type='date'
          defaultValue={data?.dueDate}
          register={register}
          error={errors?.dueDate}
        />

        <InputField
          label='Maximum Marks'
          inputName='maxMarks'
          type='number'
          defaultValue={data?.maxMarks}
          register={register}
          error={errors?.maxMarks}
        />

        <div className='flex flex-col gap-2 w-full sm:w-1/2'>
          <label className='text-xs text-gray-500'>Description</label>
          <textarea
            {...register('description')}
            className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full h-32 resize-none'
            defaultValue={data?.description}
          />
          {errors.description?.message && (
            <p className='text-xs text-red-400'>
              {errors.description?.message.toString()}
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

export default AssignmentForm
