import axios from "axios";

export const readItemsAsync = (data) => {
  return async (dispatch) => {
    let config = {
      headers: data.headers,
    };

    const onSuccess = (success) => {
      dispatch({ type: data.successType, payload: success.data });

      !data.noReload && dispatch(data.finishedReload());
      return success;
    };
    const onError = (error) => {
      dispatch({ type: data.errorType });
      !data.noReload && dispatch(data.finishedReload());
      return error;
    };
    try {
      !data.noReload && dispatch(data.startReload());
      let url;
      url = data.url.includes("https") ? data.url : data.url;
      const success = data.formData
        ? await axios.get(url, data.formData, config)
        : await axios.get(url, config);

      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  };
};
