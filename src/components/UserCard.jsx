import React from 'react'
import './styles/UserCard.css'
import swal from 'sweetalert'


const UserCard = ({user, deleteUser, setInfoUpdate, setIsDisable}) => {

  


    const mostrarAlerta=()=>{
        swal({
          title:"Delete user",
          text:"The user has been deleted",
          icon:"success",
          buttons:"Accept"
        })
      }

    const handleDelete = () => {
        deleteUser('/users', user.id)
        mostrarAlerta()
}
    const handleEdid = () => {
        setInfoUpdate(user)
        setIsDisable(false)
       
    }
  return (
   <article className='container__card'>
    <div className='card'>
    <h3 className='card__name'>{user.first_name} {user.last_name}</h3>
    <ul className='card__info'>
        <li>
            <span className='card__span'>Email: </span>
         <span>{user.email}</span></li>
        <li>
            <span className='card__span'>Birthday: </span>
         <span>{user.birthday}</span></li>
    </ul>
    <hr />
    <div className='footer__card'>
    <button className='btn__delete' onClick={handleDelete}><i className='bx bx-trash'></i></button>
    <button className='btn__edid' onClick={handleEdid}><i className='bx bx-edit-alt' ></i></button>
    </div>
    </div>
    
   </article>
  )
}

export default UserCard