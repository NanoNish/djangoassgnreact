import http from "../http-common";

const getFeed = () => {
    return http.get("/posts");
}

const addPost = (Post) => {
    return http.post("/posts", Post);
}

const Service = {
    getFeed,
    addPost,
};

export default Service;