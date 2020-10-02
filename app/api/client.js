import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'http://192.168.96.2:9000/api'
});

export default apiClient;
