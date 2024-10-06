import {Metadata} from "next";
import LayoutClient from "@/app/(client)/components/content/Layout/LayoutClient";
import Link from "next/link";
// SSR;
export const metadata: Metadata = {
    title: '404',
    description: '',
}

const NotFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404 - Страница не найдена</h1>
            <p style={styles.message}>К сожалению, запрашиваемая страница не найдена.</p>
            <Link href="/" style={styles.link}>
                Вернуться на главную
            </Link>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
    },
    title: {
        fontSize: '48px',
        margin: '0',
    },
    message: {
        fontSize: '20px',
    },
    link: {
        marginTop: '20px',
        color: '#0070f3',
        textDecoration: 'underline',
    },
};
export default NotFound;

