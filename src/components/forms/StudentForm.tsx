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
  bloodType: z.string().min(1, { message: 'Blood Type is required' }),
  birthday: z.date().min(1, { message: 'Birthday is required' }),
  sex: z.enum(['male', 'female'], { message: 'Sex is required' }),
  img: z.instanceof(File, { message: 'Image is required' }),
})

type Inputs = z.infer<typeof schema>

const StudentForm = ({
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
        {type === 'create' ? 'Create a new student' : 'Update student'}
      </h1>
      <span className='text-xs text-gray-400 font-medium'>
        Authentification Information
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
          label='Address'
          inputName='address'
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />

        <InputField
          label='Blood Type'
          inputName='bloodType'
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />

        <InputField
          label='Birthday'
          inputName='birthday'
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
          type='date'
        />

        <div className='flex flex-col gap-2 w-full sm:w-1/4'>
          <label className='text-xs text-gray-500'>Sex</label>
          <select
            {...register('sex')}
            className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full'
            defaultValue={data?.sex}
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          {errors.sex?.message && (
            <p className='text-xs text-red-400'>
              {errors.sex?.message.toString()}
            </p>
          )}
        </div>

        <div className='flex flex-col gap-2 w-full md:w-1/4 justify-center'>
          <label
            htmlFor='img'
            className='text-xs text-gray-500 flex items-center gap-2 cursor-pointer'
          >
            <Image src='/upload.png' alt='' width={28} height={28} />
            <span>Upload a photo</span>
          </label>
          <input type='file' id='img' {...register('img')} className='hidden' />
          {errors.img?.message && (
            <p className='text-xs text-red-400'>
              {errors.img?.message.toString()}
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

export default StudentForm
