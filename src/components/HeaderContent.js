
function HeaderContent()
{
    return(<header className = 'fixed w-full bg-blue-800 text-white md:flex md:justify-between'> 
    <a className = "font-bold block px-8 py-4 hover:bg-blue-800" href = "#top" class = "top"> Natalie Ruth</a>
    <nav>
        <ul className= "flex">
            <li>
                <a className = "block px-8 py-4 hover:bg-blue-700" href = "#hero"> Hero </a>
            </li>
            <li>
                <a className = "block px-8 py-4 hover:bg-blue-700" href = "#about"> About </a>
            </li>
            <li>
                <a className = "block px-8 py-4 hover:bg-blue-700" href = "#tech-support"> Tech Support</a>
            </li>
        </ul>
      </nav>
</header>);
     
}
export default HeaderContent;