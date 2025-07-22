import React from 'react'

const Welcome = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
  return (
    <div>
        <h1>{user.name}, Welcome to the Application!</h1>
        <p>We are glad to have you here.</p>
        <p>Feel free to explore the features and functionalities.</p>
        <p>If you have any questions, don't hesitate to reach out.</p>
    </div>
  )
}

export default Welcome