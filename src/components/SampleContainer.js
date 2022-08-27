import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost, getUsers } from "../modules/sample";
import Sample from "./Sample";

const SampleContainer = () => {
  const {
    loading: { GET_POST: loadingPost, GET_USERS: loadingUsers },
    post,
    users,
  } = useSelector((state) => state.sample);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(1));
    dispatch(getUsers(1));
  }, [getPost, getUsers]);
  return (
    <>
      <Sample
        loadingPost={loadingPost}
        loadingUsers={loadingUsers}
        post={post}
        users={users}
      />
    </>
  );
};

export default SampleContainer;
