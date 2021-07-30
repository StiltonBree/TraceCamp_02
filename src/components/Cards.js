
function Cards (props)
{
  return(
              <li class = "w-80 bg-white shadow rounded-lg overflow-hidden">
                 <img src = {props.img} alt="" class = "w-full"/>
                 <div class = "p-10">
                    <h3 class = "font-bold">{props.title}</h3>
                    <p>
                       {props.txt}
                    </p>
                 </div>
             </li>
      
  );
}

export default Cards;