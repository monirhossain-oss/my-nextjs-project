import Button from '@/app/components/Button'
import React from 'react'
import female from '@/public/image/female.jpg'
import Image from 'next/image'

export default function mission() {
  return (
    <div>
      <h2 className='my-10'>this is mission page</h2>
      <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente unde ipsum laudantium impedit dolore, numquam dolorum reprehenderit commodi iure.</p> 
      <Image src={female} width={400} height={200} placeholder='blur' alt="femal" />
      <Button></Button>
    </div>
  )
}
