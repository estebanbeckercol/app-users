
import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import './components/styles/Button.css'
import './components/styles/effectTriangle.css'
import swal from 'sweetalert'

function App() {

  
  

  const [infoUpdate, setInfoUpdate]=useState()
  const [isDisable, setIsDisable] = useState(true)


  const url = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUser, deleteUser, updateUser ] = useCrud(url)

  useEffect(() =>{
    getUsers('/users')
  },[])
  
  console.log(users)

  const handleNewUser = () => {
    setIsDisable(false)
  }

  return (
    
    <div className='app'>
      <div className='container__background-triangule'> 
        <div className='triangle triangle1'></div>
        <div className='triangle triangle2'></div>
        <div className='triangle triangle3'></div>
        <div className='triangle triangle4'></div>
        <div className='triangle triangle5'></div>
        <div className='triangle triangle6'></div>
        <div className='triangle triangle7'></div>
      </div>
    
       
      <h1 className='app__title'>Users</h1>
     <div className='container__btn'>
     <button  onClick={handleNewUser} className='btn__add'><span className='btn__text'>Create new User</span>
      <span className='icon' aria-hidden='true'>
      <i class='bx bxs-user'></i>
      </span>
      </button>
     </div>
      <FormUser
      createUser={createUser}
      infoUpdate={infoUpdate}
      updateUser={updateUser}
      setInfoUpdate={setInfoUpdate}
      isDisable={isDisable}
      setIsDisable={setIsDisable}
      />
      <div className='app__card'>
        {
          
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              setIsDisable={setIsDisable}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
