import React from 'react';
import styles from './Sidebar.module.scss'
const menu = [
    { title: "Popular", url: "/popular" },
    { title: "TV Shows", url: "/tv-shows" },
    { title: "Films", url: "/films" },
    { title: "My List", url: "/my-list" },
];

const Sidebar = () => {
    const [isSidebarShow, setIsSidebarShow] = React.useState(false);
    return (
        <div className={styles.sidebar} style={{width:isSidebarShow ? "30%" : "15%"}}>
            <button onClick={() => setIsSidebarShow(!isSidebarShow)}>
                <i className={`bx bx-x ${isSidebarShow ? "X" : "border-left"}`}></i>
            </button>

            <ul className={isSidebarShow ? styles.show : ''}>
                {menu.map((item) => (
                    <li key={item.title}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;