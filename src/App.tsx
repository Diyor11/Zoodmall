import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  Navigate 
} from 'react-router-dom'
// Components and pages
import { Cart, Home, Product, Products } from './pages'
import { Navbar, Main, Footer } from './layout'
// Styles and global theme
import GlobalStyles from './core-ui/globalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './data/constants'

export default function App() {


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:name' element={<Products />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Main>
        <Footer />
        <GlobalStyles />
      </Router>
    </ThemeProvider>
  )
}
