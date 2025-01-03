import React, { useState, useEffect } from 'react'
import { Container, PostForm } from '../index'
import appwriteService from '../../appwrite/configure'
import { useNavigate, useParams } from 'react-router-dom'
import { set } from 'react-hook-form'
const EditPost = () => {
  const [post, setPosts] = useState(null)
  const { slug } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then(post => {
        if (post) {
          setPosts(post)
        }
      })
    }
    else {
      navigate('/')
    }
  }, [slug, navigate])

  return post ? (<div className='py-8'>
    <Container>
      <PostForm post={post}></PostForm>
    </Container>
  </div>) : null
}

export default EditPost