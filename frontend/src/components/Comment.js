import {  useState,useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2'

const Comment= (props)=>{

   const [changeInput,setChangeInput]=useState(false)
   
    const modifyText =()=>{
        setChangeInput(!changeInput)
     }
     const  inputHandler= useRef()

     const confirm =()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                props.delete_comment(props.one_comment._id,props.token)
              Swal.fire(
                'Deleted!',
                'Your comment has been deleted.',
                'success'
              )
            }
          })

        
     }
     
     useEffect(()=>{
        setChangeInput(false)
     },[props.render])
     
     const user = props.one_comment.userId._id===props._id
     
     const comment =<div className="d-flex contenedor-comentario"> 
                        {!changeInput ? <p>{props.one_comment.comment}</p> : <> <input ref={inputHandler} 
                         type="text" defaultValue={props.one_comment.comment}/> <button onClick={()=>props.edit_comment(props.one_comment._id, inputHandler.current.value,props.token) }>Send</button> </>}
                        <div className="contenedor-iconos-comentario">
                            <img onClick={confirm} src="/assets/tacho-de-reciclaje.png" alt="tacho"/>
                            <img onClick={modifyText} src="/assets/pencil.png" alt="pencil"/>  
                        </div>                   
                    </div>

    const commentToRender= user ? comment : <p>{props.one_comment.comment}</p>

     

 return(
    
     <>
        <div >
          <div className="caja-foto-nombre-comentario">
              <div className="foto-perfil-comentario" style={{backgroundImage:`url("${props.one_comment.userId.src}")` }}></div> 
              <div className="div-comentario">
                <h5>{props.one_comment.userId.firstName}</h5>
                {commentToRender}
              </div>
              
          </div>
        
           
            

        </div>
     </>
 )

}
const mapStateToProps=(state)=>{
    return {
        token: state.user.token,
        _id: state.user._id,
     }

}

export default connect(mapStateToProps)(Comment)