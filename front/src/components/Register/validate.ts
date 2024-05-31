import { IRegister, RegisterErrorProps } from "@/types/types";

export default function validate(values: IRegister ): RegisterErrorProps{
    const errors: RegisterErrorProps = {};
    if (!values.name) {
        errors.name = "Required"
    }
    if (!values.email){
        errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "Invalid email address"
    }

    if(!values.address){
        errors.address = "Required"
    }

    if(!values.password){
        errors.password = "Required"
    }

    if(!values.phone){
        errors.phone = "Required"
    }
   
    return errors;
}