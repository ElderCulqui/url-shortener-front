import { useEffect, useState } from 'react'
import { ShortenedUrl } from '../../schemas/shortenedUrlSchema'
import Button from '../Button'
import { useNavigate } from 'react-router-dom';

type Props = {
    shortenedUrls: ShortenedUrl[]
}

function List({shortenedUrls}: Props) {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/create');
  };

  return (
    <>
        <div className="mb-3 card border-secondary w-75">
            <div className="card-header">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">Shortened URLS</h5>
                    <Button onClick={handleCreateClick} type="button">Create</Button>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Code</th>
                            <th scope="col">Original url</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shortenedUrls.map((shortenedUrl) => (
                            <tr 
                                key={shortenedUrl.id}
                            >
                                <td>{shortenedUrl.id}</td>
                                <td>{shortenedUrl.url_key}</td>
                                <td>{shortenedUrl.destination_url}</td>
                                <td>
                                    <a href={shortenedUrl.default_short_url} target='_blank'>Redirect</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                {/* <a href="#" className="btn btn-primary">Button</a> */}
            </div>
        </div>
    </>
  )
}

export default List