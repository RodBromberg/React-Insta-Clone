import React from 'react'

const AddComment = props => {
    return (
   <form onSubmit={props.addComment}>
        <input placeholder='Add A Comment....'
        value={props.comment}
        onChange={props.change}
        type="text"/>


    </form>
    )
}

export default AddComment