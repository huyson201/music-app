import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

type Props = {}

const Auth = (props: Props) => {
  const [searchParams, setSearchPrams] = useSearchParams()
  const navigation = useNavigate()
  const auth = useAuth()

  useEffect(() => {
    console.log("call --- api")
    const token = searchParams.get("token")
    if (!token) return
    auth.login(token).then(() => navigation("/", { replace: true })).catch((err) => console.log(err))
  }, [searchParams])

  return (
    <div>
      Loading
    </div>
  )
}

export default Auth