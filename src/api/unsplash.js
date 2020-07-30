import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID eYySK1uf-2iBjC6XbuYa5JcuqCCvgptnr02gLa8QTp4'
    }
})