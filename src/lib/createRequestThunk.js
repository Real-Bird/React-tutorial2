export default function createRequestThunk(type, success, failure, request) {
  return (params) => async (dispatch) => {
    dispatch(type);
    try {
      const res = await request(params);
      dispatch(success(res.data));
    } catch (e) {
      dispatch(failure({ e, error: true }));
      throw e;
    }
  };
}
