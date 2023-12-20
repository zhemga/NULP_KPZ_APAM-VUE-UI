import CustomStore from 'devextreme/data/custom_store';
import api from '../../interceptors/api-with-interceptors';

const createApamCustomStore = (key, url) => {

    return new CustomStore({
        key: key,
        async insert(values) {
            console.log(values);

            await api.post(url, values).catch(error => {
                throw new Error('Data Removing Error: ' + error);
            });
        },
        async load() {
            const response = await api.get(url).catch(error => {
                throw new Error('Data Removing Error: ' + error);
            });

            return {
                data: response.data,
                totalCount: response.data.length,
            };
        },
        async update(key, values) {
            values.Id = key;

            await api.put(url + "/" + key, values).catch(error => {
                throw new Error('Data Removing Error: ' + error);
            });
        },
        async remove(key) {
            await api.delete(url + "/" + key).catch(error => {
                throw new Error('Data Removing Error: ' + error);
            });

        }
    });
}

export default createApamCustomStore;