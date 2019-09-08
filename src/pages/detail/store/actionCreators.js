import * as constants from './constants';
import axios from 'axios';

const changeDetail = (title, content) => ({
	type: constants.CHANGE_DETAIL,
	title,
	content
})
export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/api/detail.json?id=').then((res) => {
		  const	result = res.data.data
			dispatch(changeDetail(result.title, result.content))
		})
	}
}