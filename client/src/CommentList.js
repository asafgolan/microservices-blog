export default ({ comments })=>{

    const renderComments = comments.map(comment=>{
        let content;
        if(comment.status === 'approved'){
            content = comment.content;
        } else if(comment.status === 'pending'){
            content = "This comment is awaiting moderation";
        }else if(comment.status === 'rejected'){
            content = "This comment has been rejected";
        }

        return <li key={comment.id}>{content}</li>
    })

    return <ul>{renderComments}</ul>
}
