import QuizDBS from '../organisms/QuizzDBS';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import bgpattern from '../../bgpattern.jpg';

interface Props {
    
}

const QuizzApp = (props: Props) => {
    return (
        <>
        <Header />
        <div style={{
            backgroundImage: bgpattern,
            backgroundRepeat: 'repeat',
        }}>
            <QuizDBS />
        </div>
        <Footer />
        </>
    )
}

export default QuizzApp
