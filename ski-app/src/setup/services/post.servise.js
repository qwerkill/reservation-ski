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


const postService = {
    findAll,
    findOneById,
    create,
}

export default postService

