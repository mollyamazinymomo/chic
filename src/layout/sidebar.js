import styles from './layout.module.css'

export default function SideBar() {
    const menuItems = [
        {
            name: 'Item1',
            Icon: '',
            route: '',
        },
        {
            name: 'Item2',
            Icon: '',
            route: '',
        },
        {
            name: 'Item3',
            Icon: '',
            route: '',
        }
    ]
    return (
        <div className={styles.sidebar}>
            <div>Chic Chic</div>
            <ul>
                {
                    menuItems.forEach((item) => {
                        return (<li>{item}</li>)
                    })
                }
            </ul>
        </div>
    )
}