import  Comment from './Comment'
import itinerariesActions from '../redux/actions/itinerariesActions'
import { connect } from 'react-redux';
import { useRef, useState } from 'react';



const Comments=(props)=>{
    const [allComments, setAllComments]=useState(props.comments)
    const  inputHandler= useRef()

    const deleteComment=(itineraryId,one_comment_id,token)=>{
        props.deleteComment(itineraryId,one_comment_id,token)
        .then(res=>{
            if(res.success) setAllComments(allComments.filter(comment=>comment._id!==one_comment_id))
            else throw new Error()
        })
        .catch(error=>console.log(error))
    }

    const addComment =()=>{
        let comment_value = inputHandler.current.value
        props.postComment(props.itinerary_id, comment_value ,props.token)
        .then(res=>{
            setAllComments(res.response)})
        .catch(error=>console.log(error))

    }

    return(
        <>
            <h6 className="titulo_comments">Comments</h6>
            <div className="caja_de_comentarios">
            {
                allComments.map(comment=><Comment key={comment._id} itineraryId={props.itinerary_id} one_comment={comment} delete_comment={deleteComment}/>)
            }
              
            </div>
            <input type = "text" ref={inputHandler}/>
            <button onClick={addComment}>Enviar</button>
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