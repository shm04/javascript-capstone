

const commentCount = async (comments) => {  

  let commentCount;
  if (comments.length > 0) {
    commentCount = comments.length;
  } else {
    commentCount = 0;
  }

  return commentCount;
};

export default commentCount;