import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { loginSchema, LoginObject } from '../schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from './Input';
import Button from './Button';
import axios from 'axios';

type Props = { }

function Login({}: Props) {
    const login = async (data: LoginObject) => {
        try {
            const response = await axios.post('http://url-shortener-backend.test/api/login', data);
            const token = response.data.token;
      
            localStorage.setItem('token', token);
      
            console.log('Login successful:', response.data);
        } catch (error) {
            console.error('Login failed:', error);
        }
    }
    const methods = useForm<LoginObject>({
        resolver: zodResolver(loginSchema)
    });
  return (
    <div className="container mt-4">
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(login)}>
                <h3>Inicio de sesión</h3>
                <Input name="email">Email</Input>
                <Input name="password">Password</Input>
                <Button type="submit">Enviar</Button>
            </form>
        </FormProvider>
    </div>
    
  )
}

export default Login