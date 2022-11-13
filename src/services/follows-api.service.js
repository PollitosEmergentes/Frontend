import http from '../core/services/http-common';

class FollowsApiService {
    getAll(hobbyistId) {
        return http.get(`/hobbyists/${hobbyistId}/follows`);
    }
}

export default new FollowsApiService()
