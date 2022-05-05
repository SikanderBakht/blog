import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitile] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

    return (
        <View>
            <Text style={styles.labelStyle}>Enter Title:</Text>
            <TextInput style={styles.inputStyle} value={title} onChangeText={(text) => setTitile(text)} />
            <Text style={styles.labelStyle}>Enter Content:</Text>
            <TextInput style={styles.inputStyle} value={content} onChangeText={(text) => setContent(text)} />
            <TouchableOpacity onPress={() => onSubmit(title, content)}>
                <Text style={styles.buttonStyle}> Save Blog Post</Text>
            </TouchableOpacity>
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
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

export default BlogPostForm