import SupportMembers from './SupportMembers'

import Myself from './images/MyFace.jpeg'
import Parents from './images/Parents.png'

function Support ()
{
  return(
    <div class="container px-5 py-24 mx-auto">
    <div class="grid grid-cols-3">
      <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
     <SupportMembers img = {Myself} name = "Natalie Ruth" HomeTown = "Alpharetta, GA"/>
     <SupportMembers img = {Parents} name = "My Parents" HomeTown = "Stamford CT, Long Island NY"/>
     </div>
      </div>
    </div>
  </div>
  );
}

export default Support;