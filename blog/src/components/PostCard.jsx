import React from 'react'
import appwriteService from '../appwrite/configure';
import {Link} from 'react-router-dom'
const PostCard = ({$id,title,featuredImage}) => {

  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-white rounded-xl h-full'>
            <div className='w-full justify-center mb-4 '>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl h-96 w-64 -z-10 hover:w-full transition-all hover:translate-y-3' />
            </div>
            <h2 className='text-xl font-bold text-center mb-0'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard