import {  useState,useRef, useEffect } from 'react';
import { connect } from 'react-redux';

const Comment= (props)=>{

    console.log(props)
   const [changeInput,setChangeInput]=useState(false)
   
    const modifyText =()=>{
        setChangeInput(!changeInput)
     }
     const  inputHandler= useRef()
     
     useEffect(()=>{
        setChangeInput(false)
     },[props.render])
     
     const user = props.one_comment.userId._id===props._id
     console.log(props.one_comment.userId._id)
     const comment =<div className="d-flex"> 
                        {!changeInput ? <p>{props.one_comment.comment}</p> : <> <input ref={inputHandler} 
                         type="text" defaultValue={props.one_comment.comment}/> <button onClick={()=>props.edit_comment(props.one_comment._id, inputHandler.current.value,props.token) }>send</button> </>}
                        <img onClick={()=>props.delete_comment(props.one_comment._id,props.token)} src="/assets/tacho-de-reciclaje.png" alt="tacho"/>
                        <img onClick={modifyText} src="/assets/pencil.png" alt="pencil"/>                     
                    </div>
    console.log(props._id)
    const commentToRender= user ? comment : <p>{props.one_comment.comment}</p>

     

 return(
    
     <>
        <div>
            <img src={props.one_comment.userId.src} />
            <h3>{props.one_comment.userId.firstName}</h3>
            {commentToRender}

          {/*   {
                !changeInput 
                ?<p>{props.one_comment.comment}</p>
                :<input type="text" defaultValue={props.one_comment.comment}/>
            }
                
                <img onClick={()=>props.delete_comment(props.itineraryId,props.one_comment._id,props.token)} src="/assets/tacho-de-reciclaje.png" alt="tacho"/>
                <img onClick={modifyText} src="/assets/pencil.png" alt="pencil"/> */}
                
            
            
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