import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userData } from '../features/userSlice'
import { useEffect } from 'react'
import Foreveryoneitems from './Foreveryoneitems'

const Foreveryoneproducts = () => {

    const {data, loading, error} = useSelector ((state) => state.userSlice);
    
    
    
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch (userData())
    }, [])

  return (
    <div>
        <Foreveryoneitems data = {data} loading = {loading} error = {error} />
    </div>
  )
}

export default Foreveryoneproducts