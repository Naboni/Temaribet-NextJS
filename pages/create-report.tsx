import Header from '@/components/Header'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from 'redux/userSlice'

function CreateReport() {
  const user = useSelector(selectUser)

  return (
    <div>
      <Header />
      CreateReport
    </div>
  )
}

export default CreateReport
