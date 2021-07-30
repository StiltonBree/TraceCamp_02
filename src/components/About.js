import Cards from './Cards'
import drink from './images/drink.jpeg'
import keyboard from './images/record.jpeg'
import temple from './images/kinkakujiReal.jpeg'

function About ()
{
  return(
    
  <div className = "bg-gray-100 pt-10">
         <h2 className = "text-center text-xl font-bold text-gray-900">About Me</h2>
         <ul className = "display-grid p-10 gap-10 md:grid md:grid-cols-3" >
          <Cards img = {drink} title = "Food" txt = "I love cooking and eating food, as well as ordering fancy-looking drinks!"/>   
          <Cards img = {keyboard} title = "Music" txt =" I like to make music. I've made a few songs but they're not that great." />
          <Cards img = {temple} title = "Travel" txt = "I like to travel a lot. I've been to Japan and I want to go back again someday. I've been to Kyoto, Tokyo, and Okinawa." />
         </ul>
   </div>
  );
}

export default About;