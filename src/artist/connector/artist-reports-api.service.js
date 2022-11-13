import http from '../../core/services/http-common';

class ArtistReportsApiService {
    getAll(artistId) {
        return http.get(`/artists/${artistId}/reports`);
    }
}

export default new ArtistReportsApiService()
