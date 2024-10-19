import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userData } from '../features/userSlice'
import { useEffect } from 'react'
import Womenitems from './Womenitems'

const Womenproducts = () => {
    const {data, loading, error} = useSelector ((state) => state.userSlice);
    
    
    
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch (userData())
    }, [])

  return (
    <div>
        <Womenitems data = {data} loading = {loading} error = {error} />
    </div>
  )
}

export default Womenproducts