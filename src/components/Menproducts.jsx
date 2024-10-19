import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userData } from '../features/userSlice'
import { useEffect } from 'react'
import Menitems from './Menitems'

const Menproducts = () => {

    const {data, loading, error} = useSelector ((state) => state.userSlice);
    
    
    
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch (userData())
    }, [])

  return (
    <div >
        <Menitems data = {data} loading = {loading} error = {error} />
    </div>
  )
}

export default Menproducts