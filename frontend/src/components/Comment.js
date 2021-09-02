import {  useState } from 'react';
import { connect } from 'react-redux';

const Comment= (props)=>{
   const [changeInput,setChangeInput]=useState(false)
    const modifyText =()=>{
        setChangeInput(!changeInput)
     }

 return(
    
     <>
        <div>
            <img />
            <h3></h3>
            <div className="d-flex">
            {
                !changeInput 
                ?<p>{props.one_comment.comment}</p>
                :<input type="text" value={props.one_comment.comment}/>
            }
                
                <img onClick={()=>props.delete_comment(props.itineraryId,props.one_comment._id,props.token)} src="/assets/tacho-de-reciclaje.png" alt="tacho"/>
                <img onClick={modifyText} src="/assets/pencil.png" alt="pencil"/>
                
            </div>
            
        </div>
     </>
 )

}
const mapStateToProps=(state)=>{
    return {
        token: state.user.token,
     }

}

export default connect(mapStateToProps)(Comment)