import * as actionTypes from '../constants/actionTypes';
import * as categoryApi from '../api/categoryApi';

export const getCategories = () => (dispatch, getState) => {

    dispatch({
        type: actionTypes.ACTION_GET_CATEGORIES_STARTED
    })

    categoryApi
        .getCategories()
        .then(
            response => {
                response
                    .text()
                    .then(
                        value => {
                            const categories = JSON.parse(value);
                            dispatch({
                                type: actionTypes.ACTION_GET_CATEGORIES_SUCCESS,
                                categories,
                            });
                        }
                    );
            }
        )

}