"use client"
import { useEffect } from "react"

const Users = () => {

    useEffect(() => {
        alert('loaded!')
    }, [])
  return (
    <div>Users</div>
  )
}

export default Users