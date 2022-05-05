import React, { useState, useContext } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const { state, editBlogPost } = useContext(Context)
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return (
        <BlogPostForm
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(title, content) => {
                editBlogPost(id, title, content, () => navigation.pop())
            }} />
    )
}


const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    labelStyle: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    },
    buttonStyle: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'purple'
    }
})

export default EditScreen