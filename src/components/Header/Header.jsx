import './Header.css'


function Header() {
  const Button =({id, text})=>
    (<div className='headerButton' onClick={()=>{
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }}>{text}</div>)
  

  return (
    <div className='header'>
      <div className='headerLogo'>
          <div>some logo</div>

      </div>
      <div className='headerButtons'>
          <Button id={"we"} text={"Мы"}></Button>
          <Button id={"recent"} text={"Портфолио"}></Button>
          <Button id={"dev"} text={"Проекты"}></Button>
          <Button id={"gprojects"} text={"Игры"}></Button>
          <Button id={""} text={"Контакты"}></Button>
          <div></div>
      </div>

    </div>
  )
}

export default Header
