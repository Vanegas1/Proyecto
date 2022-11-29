import Header from '../Components/Header/Nav';
import Footer from '../Components/Footer/Footer';
import Slider from '../Components/Main/Slider/Slider';
import About from '../Components/Main/About-us/About-us';
import Membership from '../Components/Main/Membership/Membership';
import Horario from '../Components/Main/Old-School-GYM/Old-School-GYM';
import Ubicacion from '../Components/Main/Ubicacion/Ubicacion';


function App(){
  return (
    <div>
      {/* Nav */}
      <Header/>

      <main>
      {/* Main */}
              <Slider/>
              <About/>
              <Membership/> 
              <Horario/>
              <Ubicacion/>
      </main>
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default App;
