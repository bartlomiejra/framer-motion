import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import { Container, Header } from './Elements'
import Nav from './Nav'
import './App.css'
import Menu from './Menu'
import HomePage from './HomePage'
import AboutPage from './AboutPage'

function App() {
  const [value, setValue] = useState(0)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isCardActive, setIsCardActive] = useState(true)
  const [isToggled, setToggle] = useState(false)

  const x = useMotionValue(0)
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header>
        <Menu onClick={() => setIsNavOpen(true)} />
        <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <h1>Header</h1>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </Header>
      <Container>
        <h2>Super Cool</h2>
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </AnimatePresence>
      </Container>
    </motion.div>
  )
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default AppWrapper
