/* Action Types */
const INSERT_BOARD='board/INSERT_BOARD';
const GET_BOARD='board/GET_BOARD';

/* Action Creators */
export const getBoard = (boards) => ({
  type:GET_BOARD,
  getData:{
    boards:boards
  }
});

/*
export const insertBoard = (boards) => ({
  type:INSERT_BOARD,
  boards:{
    id: boards.id,
    title: boards.title,
    date: boards.date,
    heartNum: boards.heartNum,
    commentNum:boards.commentNum,
    writer:boards.writer,
    comments: {
      commentWriter:boards.commentWriter,
      commentContent:boards.commentContent,
      commentDate:boards.commentDate,
      commentHeartNum:boards.commentHeartNum
    }
  }
});*/

/* Initial state */
const initialState = {
    boards: []
};

/* Reducer */
export default function board(state=initialState,action){
  switch(action.type){
    /*case INSERT_BOARD:
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
      };*/

      case GET_BOARD:
        return{
          ...state,
          getData:{
            boards: action.payload
          }
        };
  }
}