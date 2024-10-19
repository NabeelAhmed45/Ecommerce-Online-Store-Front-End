import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userData } from '../features/userSlice'
import { useEffect } from 'react'
import Electronicitems from './Electronicitems'

const Electronicsproducts = () => {

    const {data, loading, error} = useSelector ((state) => state.userSlice);
    
    
    
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch (userData())
    }, [])
  return (
    <div>
        <Electronicitems data = {data} loading = {loading} error = {error}/>
    </div>
  )
}

export default Electronicsproducts