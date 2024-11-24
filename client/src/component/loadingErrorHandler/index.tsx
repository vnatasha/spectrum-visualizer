import React from 'react';

type LoadingErrorHandlerProps = {
    loading: boolean;
    error: Error | undefined;
    children: React.ReactNode;
};

export const LoadingErrorHandler: React.FC<LoadingErrorHandlerProps> = ({ loading, error, children }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return (
        <div>
            <p>Error! {error.message}</p>
            <button onClick={() => window.location.reload()}>Retry</button>
        </div>
    );
    
    return <>{children}</>;
};