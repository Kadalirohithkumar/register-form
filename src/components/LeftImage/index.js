import React from 'react'
import animeimg from '../assets/noukari-img-removebg-preview.png'
import './index.css'

const LeftPart = () => {
  return (
    <div className='left-part'>
        <img className='nov-img' src={animeimg} alt='noukari img' />
        <h4>On Registering, You can</h4>
        <div className='info'>
        <i class="fa-solid fa-check"></i><p>Build your profile and let recruiters<br/> find you.</p>
        </div>
        <div className='info'>
        <i class="fa-solid fa-check"></i><p>Get job postings devlivered right to <br/>your email.</p>
        </div>
        <div className='info'>
        <i class="fa-solid fa-check"></i><p>Find a job and grow your career.</p>
        </div>
    </div>
  )
}

export default LeftPart