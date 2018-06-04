import { reducerKey as mvcWithSharedReducerKey, reducer as mvcWithSharedReducer } from './MVCWithShared'
import { reducerKey as mvcNormalReducerKey, reducer as mvcNormalReducer } from './MVCNormal'

export default {
  [mvcNormalReducerKey]: mvcNormalReducer,
  [mvcWithSharedReducerKey]: mvcWithSharedReducer
}
