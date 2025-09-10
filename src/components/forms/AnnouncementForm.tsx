'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import InputField from '../InputField'

const schema = z.object({
  title: z.string().min(1, { message: 'Announcement title is required' }),
  content: z.string().min(1, { message: 'Content is required' }),
  author: z.string().min(1, { message: 'Author is required' }),
  targetAudience: z.enum(['all', 'teachers', 'students', 'parents'], {
    message: 'Target audience is required',
  }),
  priority: z.enum(['low', 'medium', 'high'], {
    message: 'Priority is required',
  }),
  publishDate: z.string().min(1, { message: 'Publish date is required' }),
  expiryDate: z.string().optional(),
})

type Inputs = z.infer<typeof schema>

const AnnouncementForm = ({
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
        {type === 'create'
          ? 'Create a new announcement'
          : 'Update announcement'}
      </h1>

      <div className='flex justify-between flex-wrap gap-4 sm:justify-center sm:gap-8'>
        <InputField
          label='Announcement Title'
          inputName='title'
          defaultValue={data?.title}
          register={register}
          error={errors?.title}
        />

        <InputField
          label='Author'
          inputName='author'
          defaultValue={data?.author}
          register={register}
          error={errors?.author}
        />

        <InputField
          label='Publish Date'
          inputName='publishDate'
          type='date'
          defaultValue={data?.publishDate}
          register={register}
          error={errors?.publishDate}
        />

        <InputField
          label='Expiry Date (Optional)'
          inputName='expiryDate'
          type='date'
          defaultValue={data?.expiryDate}
          register={register}
          error={errors?.expiryDate}
        />

        <div className='flex flex-col gap-2 w-full sm:w-1/4'>
          <label className='text-xs text-gray-500'>Target Audience</label>
          <select
            {...register('targetAudience')}
            className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full'
            defaultValue={data?.targetAudience}
          >
            <option value=''>Select Audience</option>
            <option value='all'>All</option>
            <option value='teachers'>Teachers</option>
            <option value='students'>Students</option>
            <option value='parents'>Parents</option>
          </select>
          {errors.targetAudience?.message && (
            <p className='text-xs text-red-400'>
              {errors.targetAudience?.message.toString()}
            </p>
          )}
        </div>

        <div className='flex flex-col gap-2 w-full sm:w-1/4'>
          <label className='text-xs text-gray-500'>Priority</label>
          <select
            {...register('priority')}
            className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full'
            defaultValue={data?.priority}
          >
            <option value=''>Select Priority</option>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>
          {errors.priority?.message && (
            <p className='text-xs text-red-400'>
              {errors.priority?.message.toString()}
            </p>
          )}
        </div>

        <div className='flex flex-col gap-2 w-full'>
          <label className='text-xs text-gray-500'>Content</label>
          <textarea
            {...register('content')}
            className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full h-32 resize-none'
            defaultValue={data?.content}
          />
          {errors.content?.message && (
            <p className='text-xs text-red-400'>
              {errors.content?.message.toString()}
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

export default AnnouncementForm
