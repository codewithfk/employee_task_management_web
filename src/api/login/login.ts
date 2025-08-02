import { post_api } from "../root_api";

const loginApi =(data:TLoginPayload)=>post_api('admin/login',data)
const registerApi=(data:TRegister)=>post_api('register',data)
export {loginApi,registerApi}