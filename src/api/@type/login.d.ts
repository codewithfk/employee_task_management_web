interface TLoginPayload{
    email:string
    password:string
}
interface TRegister extends TLoginPayload{
    name:string
    role:string
}