import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Container>
        <h1>Welcome to Our Company</h1>
        <p>This is the home page content.</p>
      </Container>
      <Footer />
    </div>
  );
}