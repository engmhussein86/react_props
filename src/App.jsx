import './App.css'
import BlogList from '../components/BlogList/BlogList'
import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import Container from '../components/ui/Container'

function App() {

  const user={
    username: 'Mariam',
    role : 'dev',
    age: 22,
    isAdmin: true
  }
  

  return (
    <Container>
      <Header title='React Props Application' bgColor='hotpink'/>

      <Nav {...user}/>

      <BlogList />
      <Footer />
    </Container>
  );
}

export default App
