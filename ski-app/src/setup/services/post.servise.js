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

const create = async (credentials) => {
    const response = await instance.post(END_POINT, credentials);
    return response.data;
};

const findCommentsByPostId = async (id) => {
    const response = await instance.get(`comments${END_POINT}/${id}`);
    return response.data;
};

const createComment = async (credentials,id) => {
    const response = await instance.post(`comments${END_POINT}/${id}`, credentials);
    return response.data;
};





const postService = {
    findAll,
    findOneById,
    create,
    findCommentsByPostId,
    createComment
}

export default postService

