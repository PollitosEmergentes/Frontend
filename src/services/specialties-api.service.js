import http from '../core/services/http-common';

class SpecialtiesApiService {
    getAll() {
        return http.get('/specialties');
    }
    get(specialtyId) {
        return http.get(`/specialties/${specialtyId}`);
    }
}

export default new SpecialtiesApiService()
