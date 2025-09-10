'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import InputField from '../InputField'

const schema = z.object({
  title: z.string().min(1, { message: 'Event title is required' }),
  description: z.string().optional(),
  date: z.string().min(1, { message: 'Date is required' }),
  startTime: z.string().min(1, { message: 'Start time is required' }),
  endTime: z.string().min(1, { message: 'End time is required' }),
  location: z.string().min(1, { message: 'Location is required' }),
  organizer: z.string().min(1, { message: 'Organizer is required' }),
  eventType: z.enum(['academic', 'sports', 'cultural', 'meeting', 'other'], {
    message: 'Event type is required',
  }),
})

type Inputs = z.infer<typeof schema>

const EventForm = ({
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
        {type === 'create' ? 'Create a new event' : 'Update event'}
      </h1>

      <div className='flex justify-between flex-wrap gap-4 sm:justify-center sm:gap-8'>
        <InputField
          label='Event Title'
          inputName='title'
          defaultValue={data?.title}
          register={register}
          error={errors?.title}
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
          label='Location'
          inputName='location'
          defaultValue={data?.location}
          register={register}
          error={errors?.location}
        />

        <InputField
          label='Organizer'
          inputName='organizer'
          defaultValue={data?.organizer}
          register={register}
          error={errors?.organizer}
        />

        <div className='flex flex-col gap-2 w-full sm:w-1/4'>
          <label className='text-xs text-gray-500'>Event Type</label>
          <select
            {...register('eventType')}
            className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full'
            defaultValue={data?.eventType}
          >
            <option value=''>Select Type</option>
            <option value='academic'>Academic</option>
            <option value='sports'>Sports</option>
            <option value='cultural'>Cultural</option>
            <option value='meeting'>Meeting</option>
            <option value='other'>Other</option>
          </select>
          {errors.eventType?.message && (
            <p className='text-xs text-red-400'>
              {errors.eventType?.message.toString()}
            </p>
          )}
        </div>

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

export default EventForm
