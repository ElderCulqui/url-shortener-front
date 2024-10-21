import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { shortenedUrlSchema, ShortenedUrl } from '../../schemas/shortenedUrlSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../Input';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type Props = {
    // onSave: (shortenedUrl: ShortenedUrl) => void
}

function Create({}: Props) {
    const navigate = useNavigate();

    const onSubmit = async (data: ShortenedUrl)  => {
        // setLoading(true);
        console.log('Data:', data);
        try {
            const url = 'http://url-shortener-backend.test/api/shortener-url';
            const token = localStorage.getItem('token');
            const response = await axios.post(
                url,
                data,
                {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    }
                }
            );
            console.log('Data:', response.data);
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
        }
        
        // setLoading(false);
    };

    const methods = useForm<ShortenedUrl>({
        resolver: zodResolver(shortenedUrlSchema)
    });

    return (
        <>
            <div className="container mt-4">
                <div className="mb-3 card border-secondary w-75">
                    <div className="card-header">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">Create new URL</h5>
                            <Button onClick={() => navigate('/')} type="button">Volver</Button>
                        </div>
                    </div>
                    <div className="card-body">
                        <FormProvider {...methods}>
                            <form onSubmit={methods.handleSubmit(onSubmit)}>
                                <Input name="original_url">Original URL</Input>
                                <Button type="submit">Enviar</Button>
                            </form>
                        </FormProvider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create