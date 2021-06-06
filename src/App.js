import React, { useState } from 'react'
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import { Card, CardGrid, Container, Header } from './Elements'
import './App.css'
import Modal from './Modal'
import Accordion from './Accordion'
import Nav from './Nav'
import Squeres from './Squeres'
import Menu from './Menu'
import blue from './blue.png'
import purp from './purp.png'
import black from './black.png'
import green from './green.png'

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
      </Header>
      <Container>
        <Squeres />
        {isToggled && <h2>Super Coool</h2>}
        <button onClick={() => setToggle(true)}>Toggle</button>
        <input
          type="range"
          min="-100"
          max="100"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Modal isToggle={isToggled} setToggle={setToggle}>
          <Card style={{ background: 'var(--purp)' }}>
            <h3>Some card</h3>
            <img src={purp} alt="photso" />
          </Card>
        </Modal>
        <Accordion />
        <CardGrid>
          <Card
            //    whileHover ={{ scale: [1.02, 0.8 ,1.04]}}
            //    whileTap={{ background: "var(--red)"}}
            //    onHoverEnd={( ) => console.log("hover end")}

            drag
            dragConstraints={{
              top: -100,
              left: -100,
              bottom: 100,
              right: 100,
            }}
            style={{ background: 'var(--purp)' }}
          >
            <h3>Some card</h3>
            <img src={purp} alt="photso" />
          </Card>
          <AnimatePresence>
            {isCardActive && (
              <motion.div
                exit={{ height: 0, overflow: 'hidden', opacity: 0 }}
                transition={{
                  opacity: {
                    duration: 0,
                  },
                }}
              >
                <Card
                  onDragEnd={(event, info) => {
                    console.log(info.point.x)
                    if (Math.abs(info.point.x) > 200) {
                      setIsCardActive(false)
                    }
                  }}
                  drag="x"
                  dragConstraints={{
                    left: 0,
                    right: 0,
                  }}
                  style={{
                    x,
                    opacity,
                    background: 'var(--blue)',
                  }}
                >
                  <h3>Some card</h3>
                  <img src={blue} alt="photosdw" />
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
          <Card style={{ background: 'var(--black)' }}>
            <h3>Some card</h3>
            <img src={black} alt="photrro" />
          </Card>
          <Card style={{ background: 'var(--green)' }}>
            <h3>Some card</h3>
            <img src={green} alt="pho45to" />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  )
}

export default App
