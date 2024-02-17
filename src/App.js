import React from 'react';
import Blogpost from './Blogpost';
import { Typography, Container, createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),
        h2: {
            fontWeight: 700,
            fontSize: '2.5em',
            marginBottom: '0.5em',
        },
        h5: {
            fontWeight: 700,
            fontSize: '2em',
            marginBottom: '0.5em',
        },
        body1: {
            fontSize: '1em',
        },
    },
    palette: {
        background: {
            default: '#fff',
        },
        text: {
            primary: '#333',
        },
    },
});

const App = () => {
    const blogPosts = [
        { title: 'First Post', content: 'This is the first post.' },
        { title: 'Second Post', content: 'This is the second post.' },
        { title: 'Third Post', content: 'This is the third post.' },
        // Add more blog posts here
    ];

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Typography variant="h2" gutterBottom>Welcome to My Blog</Typography>
                {
                    blogPosts.map((post, index) => (
                        <Blogpost key={index} title={post.title} content={post.content} />
                    ))
                }
            </Container>
        </ThemeProvider>
    );
};

export default App;