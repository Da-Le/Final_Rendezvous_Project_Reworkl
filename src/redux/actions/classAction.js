import * as actionTypes from '../types';

const classroomSuccess = (classdata) => ({
    type: actionTypes.SET_CLASSROOM,
    payload: classdata
});



export const classroomData = (classdata, history) => (dispatch) => {
    try {
        dispatch(classroomSuccess(classdata));
        history.push(`/classannouncement/${classdata.id}`)
    } catch (err) {
        console.error(err)
    }
}









