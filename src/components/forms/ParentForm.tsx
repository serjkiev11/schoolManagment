'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import InputField from '../InputField'
import Image from 'next/image'

const schema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long' })
    .max(20, { message: 'Username must be at most 20 characters long' }),
  email: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
    message: 'Invalid email format',
  }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' }),
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  phone: z.string().min(1, { message: 'Phone is required' }),
  address: z.string().min(1, { message: 'Address is required' }),
  occupation: z.string().min(1, { message: 'Occupation is required' }),
  workPhone: z.string().optional(),
  emergencyContact: z
    .string()
    .min(1, { message: 'Emergency contact is required' }),
})

type Inputs = z.infer<typeof schema>

const ParentForm = ({
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
        {type === 'create' ? 'Create a new parent' : 'Update parent'}
      </h1>
      <span className='text-xs text-gray-400 font-medium'>
        Authentication Information
      </span>
      <div className='flex justify-between flex-wrap gap-4 sm:justify-center sm:gap-8'>
        <InputField
          label='Username'
          inputName='username'
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputField
          label='Email'
          inputName='email'
          type='email'
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
        <InputField
          label='Password'
          inputName='password'
          type='password'
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
        />
      </div>

      <span className='text-xs text-gray-400 font-medium'>
        Personal Information
      </span>
      <div className='flex justify-between flex-wrap gap-4 sm:justify-center sm:gap-8'>
        <InputField
          label='First Name'
          inputName='firstName'
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />

        <InputField
          label='Last Name'
          inputName='lastName'
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />

        <InputField
          label='Phone'
          inputName='phone'
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />

        <InputField
          label='Work Phone'
          inputName='workPhone'
          defaultValue={data?.workPhone}
          register={register}
          error={errors.workPhone}
        />

        <InputField
          label='Address'
          inputName='address'
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />

        <InputField
          label='Occupation'
          inputName='occupation'
          defaultValue={data?.occupation}
          register={register}
          error={errors.occupation}
        />

        <InputField
          label='Emergency Contact'
          inputName='emergencyContact'
          defaultValue={data?.emergencyContact}
          register={register}
          error={errors.emergencyContact}
        />
      </div>
      <button className='bg-blue-400 text-white p-2 rounded-md'>
        {type === 'create' ? 'Create' : 'Update'}
      </button>
    </form>
  )
}

export default ParentForm
