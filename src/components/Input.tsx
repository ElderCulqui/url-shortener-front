import React, { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
    name: string,
    children: ReactNode
}

const Input = ({ name, children }: Props) => {
    const { register, formState, getFieldState } = useFormContext();
    const { error } = getFieldState(name, formState);
  return (
    <div className="mt-3 mb-3">
        <label htmlFor={name} className="form-label">{ children }</label>
        <input {...register(name)} type="text" id={name} className="form-control" />
        {error?.message && <div className="mt-1 alert alert-danger">{ error?.message }</div>}
    </div>
  )
}

export default Input