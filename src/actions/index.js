import {SAVE_COMMENT} from './types';

export const saveComment = (payload) => {
    return {
        type: SAVE_COMMENT,
        payload
    };
};