import styles from './MenuItem.module.scss';

type MenuItemProps = {
    name: string;
    prop?: string;
    handleClick: any;
};

export function MenuItem({ name, prop, handleClick }: MenuItemProps) {
    return (
        <div className={styles.menuItemContainer} role='menuitem' tabIndex={-1}>
            <button
                className={styles.menuItemButton}
                onClick={() => handleClick(name, prop)}
                data-prop={prop}
            >
                {name}
            </button>
        </div>
    );
}
