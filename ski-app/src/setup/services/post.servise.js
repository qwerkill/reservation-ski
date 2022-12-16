import instance from "./api.service"

const END_POINT = `/posts`;

const findAll = async () => {
    const response = await instance.get(END_POINT);
    return response.data;
};

const findOneById =  async (id) => {
    const response = await instance.get(`${END_POINT}/${id}`);
    return response.data;
};



const findCommentsByPostId = async (id) => {
    const response = await instance.get(`/comments${END_POINT}/${id}`);
    return response.data;
};

const createComment = async (credentials) => {
    const response = await instance.post(`/comments`, credentials);
    return response.data;
};

const findBookingsByPostId = async (id) => {
    const response = await instance.get(`/bookings${END_POINT}/${id}`);
    return response.data;
};


const createBooking = async (credentials) => {
    const response = await instance.post(`/bookings`, credentials);
    return response.data;
};

const update = async (credentials) => {
    const response = await instance.put(`${END_POINT}/${credentials._id}`, credentials);
    return response.data;
};





const postService = {
    findAll,
    findOneById,
    update,
    findCommentsByPostId,
    createComment,
    createBooking,
    findBookingsByPostId
}

export default postService

