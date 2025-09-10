'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import InputField from '../InputField'

const schema = z.object({
  student: z.string().min(1, { message: 'Student is required' }),
  exam: z.string().min(1, { message: 'Exam is required' }),
  subject: z.string().min(1, { message: 'Subject is required' }),
  score: z.number().min(0, { message: 'Score must be 0 or greater' }),
  maxScore: z.number().min(1, { message: 'Maximum score is required' }),
  grade: z.string().optional(),
  remarks: z.string().optional(),
})

type Inputs = z.infer<typeof schema>

const ResultForm = ({
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
        {type === 'create' ? 'Create a new result' : 'Update result'}
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
          label='Exam'
          inputName='exam'
          defaultValue={data?.exam}
          register={register}
          error={errors?.exam}
        />

        <InputField
          label='Subject'
          inputName='subject'
          defaultValue={data?.subject}
          register={register}
          error={errors?.subject}
        />

        <InputField
          label='Score'
          inputName='score'
          type='number'
          defaultValue={data?.score}
          register={register}
          error={errors?.score}
        />

        <InputField
          label='Maximum Score'
          inputName='maxScore'
          type='number'
          defaultValue={data?.maxScore}
          register={register}
          error={errors?.maxScore}
        />

        <div className='flex flex-col gap-2 w-full sm:w-1/4'>
          <label className='text-xs text-gray-500'>Grade</label>
          <select
            {...register('grade')}
            className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full'
            defaultValue={data?.grade}
          >
            <option value=''>Select Grade</option>
            <option value='A+'>A+</option>
            <option value='A'>A</option>
            <option value='A-'>A-</option>
            <option value='B+'>B+</option>
            <option value='B'>B</option>
            <option value='B-'>B-</option>
            <option value='C+'>C+</option>
            <option value='C'>C</option>
            <option value='C-'>C-</option>
            <option value='D'>D</option>
            <option value='F'>F</option>
          </select>
          {errors.grade?.message && (
            <p className='text-xs text-red-400'>
              {errors.grade?.message.toString()}
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

export default ResultForm
