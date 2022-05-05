// #region useReducer
import jsonServer from '../api/jsonServer';
import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts':
            return action.payload
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            });
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        default:
            return state
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts')
        dispatch({ type: 'get_blogposts', payload: response.data })
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        const response = await jsonServer.post('/blogposts', { title, content })
        if (callback) {
            callback()
        }
    }
}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        const response = await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'delete_blogpost', payload: id })
    }
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        const response = await jsonServer.put(`/blogposts/${id}`, { title, content })
        dispatch({ type: 'edit_blogpost', payload: { id, title, content } })
        if (callback) {
            callback()
        }
    }
    
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts }, [])
// #endregion


// #region using useState
// import React, { useState } from 'react'

// const BlogContext = React.createContext()

// export const BlogProvider = ({ children }) => {
//     const [blogPosts, setBlogPosts] = useState([])

//     const addBlogPost = () => {
//         setBlogPosts([...blogPosts, {title: `Blog Post # ${blogPosts.length + 1}`}])
//     }
//     return <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
//         {children}
//     </BlogContext.Provider>
// }

// export default BlogContext

// #endregion