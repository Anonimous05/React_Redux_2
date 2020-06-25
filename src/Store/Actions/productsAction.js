import axiosAPI from "../../axiosAPI";

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';

export const POST_PRODUCTS_SUCCESS = 'POST_PRODUCTS_SUCCESS';
export const POST_PRODUCTS_ERROR = 'POST_PRODUCTS_ERROR';

export const PUT_PRODUCTS_SUCCESS = 'PUT_PRODUCTS_SUCCESS';
export const PUT_PRODUCTS_ERROR = 'PUT_PRODUCTS_ERROR';

export const getProductsRequest = () => ({type:GET_PRODUCTS_REQUEST});
export const getProductsSuccess = (products) => ({type:GET_PRODUCTS_SUCCESS,products});
export const getProductsError =  () => ({type:GET_PRODUCTS_ERROR});

export const postProductsSuccess =  () => ({type: POST_PRODUCTS_SUCCESS});
export const postProductsError =  () => ({type: POST_PRODUCTS_ERROR});

export const putProductsSuccess = () => ({type: PUT_PRODUCTS_SUCCESS});
export const putProductsError = () => ({type: PUT_PRODUCTS_ERROR});

export const fetchProducts = () => {
    return async dispatch => {
        try {
            dispatch(getProductsRequest());
            const response = await axiosAPI.get('/products/.json');
            dispatch(getProductsSuccess(response.data));
        } catch(error) {
            dispatch(getProductsError(error))
        }
    }
};

export const postProducts = (product) => {
    return async dispatch => {
        try{
            dispatch(postProductsSuccess(product));
            await axiosAPI.post('/products/.json', product);
        } catch (error) {
            dispatch(postProductsError(error))
        }
    }
};

export const putProducts = (productId, productInfo) => {
  return async dispatch => {
      try {
          await axiosAPI.put(`/products/${productId}.json`, productInfo);
          dispatch(fetchProducts())
      } catch (error) {
          dispatch(putProductsError(error))
      }
  }
};
