import React from "react";
import {
  User,
  Moon,
  Sun,
  Bell,
  Bot,
  Mic,
  Volume2,
  Shield,
  Database,
  Download,
  Trash2,
  BookOpen,
  Info,
  ChevronRight,
  LogOut,
} from "lucide-react";
import "./Settings.css";

function Settings() {
  return (
    <div className="settings-page">
      <h1 className="settings-title">Settings</h1>

      {/* Profile */}
      <div className="settings-section">
        <h2>Account</h2>

        <div className="setting-item">
          <User size={22} />
          <span>Profile</span>
          <ChevronRight />
        </div>

        <div className="setting-item">
          <LogOut size={22} />
          <span>Logout</span>
          <ChevronRight />
        </div>
      </div>

      {/* Appearance */}
      <div className="settings-section">
        <h2>Appearance</h2>

        <div className="setting-item">
          <Moon size={22} />
          <span>Dark Theme</span>
        </div>

        <div className="setting-item">
          <Sun size={22} />
          <span>Light Theme</span>
        </div>
      </div>

      {/* AI */}
      <div className="settings-section">
        <h2>AI Assistant</h2>

        <div className="setting-item">
          <Bot size={22} />
          <span>Select AI Model</span>
          <ChevronRight />
        </div>

        <div className="setting-item">
          <BookOpen size={22} />
          <span>Study Mode</span>
          <ChevronRight />
        </div>
      </div>

      {/* Voice */}
      <div className="settings-section">
        <h2>Voice</h2>

        <div className="setting-item">
          <Mic size={22} />
          <span>Voice Input</span>
        </div>

        <div className="setting-item">
          <Volume2 size={22} />
          <span>Voice Output</span>
        </div>
      </div>

      {/* Notifications */}
      <div className="settings-section">
        <h2>Notifications</h2>

        <div className="setting-item">
          <Bell size={22} />
          <span>Notifications</span>
        </div>
      </div>

      {/* Data */}
      <div className="settings-section">
        <h2>Data & Privacy</h2>

        <div className="setting-item">
          <Database size={22} />
          <span>Chat History</span>
          <ChevronRight />
        </div>

        <div className="setting-item">
          <Download size={22} />
          <span>Export Chats</span>
          <ChevronRight />
        </div>

        <div className="setting-item danger">
          <Trash2 size={22} />
          <span>Clear All Chats</span>
        </div>

        <div className="setting-item">
          <Shield size={22} />
          <span>Privacy</span>
          <ChevronRight />
        </div>
      </div>

      {/* About */}
      <div className="settings-section">
        <h2>About</h2>

        <div className="setting-item">
          <Info size={22} />
          <span>About Spidy AI</span>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}

export default Settings;