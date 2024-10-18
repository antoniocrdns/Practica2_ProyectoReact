import React from "react";
import { Alert } from "react-bootstrap";

const Home = () => {
    return (
        <div>
            <h1>Home page</h1>
            {[
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
            ].map((variant) => (
                <Alert key={variant} variant={variant}> 
                    This is a {variant} alert-check it out!
                </Alert>
            ))}
        </div>
    )
}

export default Home;