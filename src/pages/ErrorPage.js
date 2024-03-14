import MainNavigation from '../components/UI/MainNavigation/MainNavigation';

const ErrorPage = () => {
    return (
        <>
            <MainNavigation />
            <main style={{ color: 'lightgrey' }}>
                <h1>An error occurred!</h1>
                <p>Could not find this page!</p>
            </main>
        </>
    );
};

export default ErrorPage;
