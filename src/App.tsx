import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  Navigate 
} from 'react-router-dom'
// Components and pages
import { Cart, Home, Product, Products } from './pages'
import { Navbar, Footer } from './components/layout'
// Styles and global theme
import GlobalStyles from './core-ui/globalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './data/constants'
import {MobilMenu} from './components/'
import ScrollToUp from './components/scrollToUp'

export default function App() {


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:name' element={<Products />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
          <MobilMenu />
        </main>
        <Footer />
        <GlobalStyles />
        <ScrollToUp />
      </Router>
    </ThemeProvider>
  )
}
