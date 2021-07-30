
function SupportMembers (props)
{
  return(
       
       <>   
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={props.img}/>
          <br />
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">{props.name}</h2>
          <p class="text-gray-500">{props.HomeTown}</p>
       </>
   
  );
}

export default SupportMembers;