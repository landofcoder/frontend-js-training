import axios from 'axios';

export function* checkDiscountProcessService(payload) {
    return yield axios
        .get('api_url', {
            params: {test_param: 1}
        })
        .then(function (response) {
            return response.status === 200 ? response.data : [];
        })
}
