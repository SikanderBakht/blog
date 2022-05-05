import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {

    const { addBlogPost } = useContext(Context)

    return (
        <BlogPostForm onSubmit={(title, content) => {
            addBlogPost(title, content, () => navigation.navigate('Index'))
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

export default CreateScreen