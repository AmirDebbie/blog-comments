import React, { useState } from 'react'

function Blog() {
    const [blog, setBlog] = useState({
        title: 'Awesome Blog',
        content: 'It also includes entries from the former A2R (Alternatives to Religion) blog, a collaborative project between Conway Hall and Bishopsgate Institute which sparked exploration of some of the ways people have tried to make sense of the world and live together ethically without the need for faith in a God or gods. The key themes linking this broad movement are Freethought, Ethics, Humanism, Rationalism and Secularism. Material for these entries came from the British Humanist Association, The National Secular Society and Conway Hall Ethical Society. Posts were written by archivists, Nicky Hilton and Carl Harrison.'
    });
    return (
        <div style={styles.wrapper}>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
    )
}

const styles = {
    wrapper: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#222',
        padding: 20,
        margin: 20
    },
    title: {
        
    }
}

export default Blog
