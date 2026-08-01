import "./Sidebar.css";

import {

    MessageSquarePlus,
    History,
    FileText,
    BookOpen,
    Bot,
    Star,
    Settings,
    CircleUser,
    HelpCircle,
    LogOut,

} from "lucide-react";

function Sidebar({ open }) {

    return (

        <aside className={open ? "sidebar open" : "sidebar"}>

            <div>

                <button className="sidebar-btn">

                    <MessageSquarePlus size={20} />

                    <span>New Chat</span>

                </button>

                <button className="sidebar-btn">

                    <History size={20} />

                    <span>Recent Chats</span>

                </button>

                <button className="sidebar-btn">

                    <FileText size={20} />

                    <span>PDF Library</span>

                </button>

                <button className="sidebar-btn">

                    <BookOpen size={20} />

                    <span>Study Notes</span>

                </button>

                <button className="sidebar-btn">

                    <Bot size={20} />

                    <span>AI Models</span>

                </button>

                <button className="sidebar-btn">

                    <Star size={20} />

                    <span>Favorites</span>

                </button>

            </div>

            <div className="bottom-menu">

                <button className="sidebar-btn">

                    <Settings size={20} />

                    <span>Settings</span>

                </button>

                <button className="sidebar-btn">

                    <CircleUser size={20} />

                    <span>Profile</span>

                </button>

                <button className="sidebar-btn">

                    <HelpCircle size={20} />

                    <span>Help</span>

                </button>

                <button className="sidebar-btn">

                    <LogOut size={20} />

                    <span>Logout</span>

                </button>

            </div>

        </aside>

    );

}

export default Sidebar;