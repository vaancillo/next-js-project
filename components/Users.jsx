/* eslint-disable @next/next/no-img-element */
"use client"

import Link  from "next/link"

function Users({users}) {
  return (
<ul>
      {
        users.map(user => (
          <Link href={`/users/${user.id}`} key={user.id}>
          <li key={user.id} className='bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between' >
            <div>
              <h5 className="font-bold">{user.id} {user.first_name} {user.last_name}</h5>
              <p className="text-slate-200">email: {user.email}</p>
            </div>
              <img src={user.avatar} alt={user.first_name} className="rounded-full w-28" />
          </li>
          </Link>
        ))
      }
    </ul>
  )
}

export default Users