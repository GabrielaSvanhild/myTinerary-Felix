import  Comment from './Comment'
import itinerariesActions from '../redux/actions/itinerariesActions'
import { connect } from 'react-redux';
import { useRef, useState } from 'react';


const Comments=(props)=>{
    const [renderComments,setRenderComments]=useState(false) 
    const [allComments, setAllComments]=useState(props.comments)
    const  inputHandler= useRef()
    const deleteComment=(one_comment_id,token)=>{
        props.deleteComment(one_comment_id,token)
        .then(res=>{
            if(res.success) setAllComments(allComments.filter(comment=>comment._id!==one_comment_id))
            else throw new Error()
        })
        .catch(error=>console.log(error))
    }
    const editComment=(one_comment_id,comment,token)=>{
        props.modifyComment(one_comment_id,comment,token)
        .then((res)=>{
            if(res.success){
                allComments.forEach(newComment=>{
                    if(newComment._id===one_comment_id){
                        newComment.comment=comment
                    }
                })    
                setAllComments(allComments)
                setRenderComments(!renderComments)
            }
        })
        .catch(error=>console.log(error))
    }

    const addComment =(e)=>{
        let comment_value = inputHandler.current.value
        props.postComment(props.itinerary_id, comment_value ,props.token)
        .then(res=>{
            inputHandler.current.value=""
            setAllComments(res.response)})
        .catch(error=>console.log(error))          
    }
   
    return(
        <>
            <div className="contenedor-titulo-comentario">
                <h6 className="titulo_comments">Comments</h6>
            </div>
            
            <div className="caja_de_comentarios">
            {
                allComments.map(comment=><Comment
                    render={renderComments}
                    key={comment._id} itineraryId={props.itinerary_id}
                    one_comment={comment} delete_comment={deleteComment} edit_comment={editComment}
                      />)
            }
              
            </div>
            <div className="caja-envio_comentario"> 
                <input type = "text" ref={inputHandler}  placeholder= {!props.token && "You have to login to comment"} disabled={props.token ? false : true}  />
                <button onClick={addComment} disabled={props.token ? false : true} >Send Comment</button>
            </div>
        </>
        
    )

}
const mapStateToProps=(state)=>{
    return {
        token: state.user.token,
     }

}

const mapDispatchToProps={
    postComment:itinerariesActions.addCommentItinerary,
    deleteComment:itinerariesActions.deleteComment,
    modifyComment:itinerariesActions.modifyComment,
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)