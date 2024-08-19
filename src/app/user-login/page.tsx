import React from 'react'
import UserSignIn from '../components/user-login/user-login'
import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

export default function page() {
  return (
    <>
    <NavBar />
    <UserSignIn />
    <Footer />
    </>
  )
}
