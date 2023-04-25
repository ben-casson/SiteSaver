import styles from './AddBookmarkButton.module.scss';
import Link from 'next/link';

export default function AddBookmarkButton() {
    return (
        <Link href={'/addBookmark'} className={styles.addBookmark}>
            Add Bookmark
        </Link>
    );
}
