import storage from 'redux-persist/lib/storage'

export const todosPersistConfig = {
    key: 'todos',
    storage,
    blacklist: ['editID'] // exclude transient UI State
};