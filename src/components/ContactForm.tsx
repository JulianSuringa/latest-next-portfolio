// components/ContactForm.tsx
'use client' // if using App Router
import { useForm } from 'react-hook-form'

type ContactFormInputs = {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>()

  const onSubmit = async (data: ContactFormInputs) => {
    console.log('Form data:', data)
    // Example: send to an API route
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: { 'Content-Type': 'application/json' },
    // });

    reset() // clear form after submit
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto p-4">
      <div>
        <label className="block">Name</label>
        <input
          type="text"
          {...register('name', { required: 'Name is required' })}
          className="w-full border p-2 rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block">Email</label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'Invalid email address',
            },
          })}
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block">Message</label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          className="w-full border p-2 rounded"
          rows={5}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
