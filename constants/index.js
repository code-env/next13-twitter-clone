import { RiHome7Fill, RiUserLine } from "react-icons/ri"
import { HiBell, } from "react-icons/hi"
import { HiOutlineCog6Tooth, } from "react-icons/hi2"


export const sidebarRoutes = [
    {
        name: "Home", path: "/", icon: RiHome7Fill
    },
    {
        name: "Notification", path: "/notification", icon: HiBell
    },
    {
        name: "Profile", path: "/profile/35467890", icon: RiUserLine
    },
    {
        name: "Settings", path: "/settings", icon: HiOutlineCog6Tooth
    },
]

export const usersToFollow = [
    {
        name: "john doe",
        username: "johndoe",
        profilePic: "/Images/user1.jpg"
    },
    {
        name: "john muller",
        username: "johnmuller",
        profilePic: "/Images/user2.jpg"
    },
    {
        name: "john doe",
        username: "johndoe",
        profilePic: "/Images/user1.jpg"
    },
    {
        name: "john muller",
        username: "johnmuller",
        profilePic: "/Images/user2.jpg"
    }
]


export const userPosts = [
    {
        name: "john muller",
        username: "johnmuller",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ea nulla inventore at voluptatem dolorem qui maiores. Totam, esse error?",
        id: 1
    },
    {
        name: "john muller",
        username: "johnmuller",
        image: "/Images/img1.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ea nulla inventore at voluptatem dolorem qui maiores. Totam, esse error?",
        id: 2
    },
    {
        name: "john muller",
        username: "johnmuller",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ea nulla inventore at voluptatem dolorem qui maiores. Totam, esse error?",
        id: 3
    },
    {
        name: "john muller",
        username: "johnmuller",
        image: "/Images/img2.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ea nulla inventore at voluptatem dolorem qui maiores. Totam, esse error?",
        id: 4
    },

]

export const settingsRoutes = [
    {
        name: "Your account",
        path: "/settings"
    },
    {
        name: "Password",
        path: "/settings/password"
    },
    {
        name: "Display",
        path: "/settings/display"
    }
]

export const colorTypes = [
    {
        name: "blue",
        bg: "bg-sky-500"
    },
    {
        name: "yellow",
        bg: "bg-yellow-500"
    },
    {
        name: "rose",
        bg: "bg-rose-500"
    },
    {
        name: "indigo",
        bg: "bg-indigo-500"
    },
    {
        name: "orange",
        bg: "bg-orange-500"
    },
    {
        name: "green",
        bg: "bg-green-500"
    },
]

export const themeTypes = [
    {
        name: "light",
        bg: "bg-white",
        color: "black",
        label: "Default"
    },
    {
        name: "dim",
        label: "Dim"
    },
    {
        name: "lightout",
        bg: "bg-black",
        label: "Lights out"
    },
]