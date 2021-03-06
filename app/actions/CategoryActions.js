import ActionTypes from '../constants/ActionTypes';
import {categoryMap, parseCategory} from '../utils/DataParser';

/**
 * 请求一级分类数据
 * @returns {function(*)}
 */
export const loadRootCategoryList = () => {
    return dispatch => {
        // 模拟网络请求
        let categoryList = require('../../data/category_list.json').categoryList;
        categoryList.forEach((item, index) => {
            item.isSelected = index === 0;
        });
        dispatch({
            type: ActionTypes.GET_CATEGORY_LIST,
            payload: {
                categoryList
            }
        });
    };
};

export const clearCategoryDetail = () => {
    return {
        type: ActionTypes.REMOVE_CATEGORY,
    };
};

export const loadCategoryDetail = (index) => {
    if (categoryMap.has(index)) {
        return dispatch => {
            dispatch({
                type: ActionTypes.GET_CATEGORY_DETAIL,
                payload: {
                    detail: categoryMap.get(index)
                }
            });
        };
    } else {
        return dispatch => {
            // 模拟网络请求
            setTimeout(() => {
                let detail = parseCategory(index);
                // 组装数据
                dispatch({
                    type: ActionTypes.GET_CATEGORY_DETAIL,
                    payload: {
                        detail
                    }
                });
            }, 500);
        };
    }
};

export const changeRootCategory = (index) => {
    return {
        type: ActionTypes.UPDATE_CATEGORY,
        payload: {
            index
        }
    };
};

export const onPromotionClick = (item) => {
    return {
        type: ActionTypes.DISPATCH_PROMOTION,
        payload: {
            item
        }
    };
};

export const onRankingClick = (item) => {
    return {
        type: ActionTypes.DISPATCH_RANKING,
        payload: {
            item
        }
    };
};

export const onCategoryClick = (item) => {
    return {
        type: ActionTypes.DISPATCH_PRODUCT_LIST,
        payload: {
            item
        }
    };
};