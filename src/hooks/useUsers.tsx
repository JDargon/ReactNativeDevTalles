import { useState } from "react"
import type { User } from "../interfaces/reqres.response"

export const useUsers = () => {

const [users, setUsers] = useState<User[]>([])

  return {
    users,
  }
    
}


