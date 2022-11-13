import http from '../core/services/http-common';

class HobbyistReportsApiService {
    getAll(hobbyistId) {
        return http.get(`/hobbyists/${hobbyistId}/reports`);
    }
}

export default new HobbyistReportsApiService()
