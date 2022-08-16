/* Action Types */
const INSERT_BOARD='board/INSERT_BOARD';
const GET_BOARD='board/GET_BOARD';

/* Action Creators */
export const insertBoard = (insertData) => ({
  type:INSERT_BOARD,
  insertData:{
    id: insertData.id,
    title: insertData.title,
    date: insertData.date,
    heartNum: insertData.heartNum,
    commentNum:insertData.commentNum,
    writer:insertData.writer,
    comments: {
      commentWriter:insertData.commentWriter,
      commentContent:insertData.commentContent,
      commentDate:insertData.commentDate,
      commentHeartNum:insertData.commentHeartNum
    }
  }
});

/* Initial state */
const initialState = {
    boards: []
};

/* Reducer */
export default function board(state=initialState,action){
  switch(action.type){
    case INSERT_BOARD:
      return{
        ...state,
        insertData:{
          id: insertData.id,
          title: insertData.title,
          date: insertData.date,
          heartNum: insertData.heartNum,
          commentNum:insertData.commentNum,
          writer:insertData.writer,
          comments: {
            commentWriter:insertData.commentWriter,
            commentContent:insertData.commentContent,
            commentDate:insertData.commentDate,
            commentHeartNum:insertData.commentHeartNum
          }
        }
      };
  }
}