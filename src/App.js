import HeaderContent from './components/HeaderContent.js'
import Intro from './components/Intro'

import About from './components/About'
import Support from './components/Support'
function App() {
  return (
    <main>

   <div>  
 <HeaderContent/>
 <Intro/>
 <About/>
 <Support/>
 <footer class = "text-white bg-gray-800 pd-10 italic text-center">
    © 2020  Natalie Ruth. All rights reserved.
</footer>
  </div>

    </main>
  
  );
}

export default App;
