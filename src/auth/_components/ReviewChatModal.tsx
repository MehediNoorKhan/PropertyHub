import React, { useState } from "react";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";

const ReviewChatModal: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Floating Chat Button */}
            <button
                className="review-chat-button"
                onClick={() => setOpen(true)}
            >
                <IoChatbubbleOutline size={24} />
            </button>

            {/* Chat Modal */}
            {open && (
                <div className="chat-modal-container">
                    {/* Header */}
                    <div className="chat-modal-header">
                        <div className="chat-header-icon bg-[#5F8C6E] p-4 rounded-full"><IoChatbubbleOutline size={18} /></div>
                        <div>
                            <div className="chat-header-title">Property Assistant</div>
                            <div className="chat-header-status">Online now</div>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            style={{
                                marginLeft: "auto",
                                background: "transparent",
                                border: "none",
                                color: "#fff",
                                fontSize: "18px",
                                cursor: "pointer",
                            }}
                        >
                            ✕
                        </button>

                    </div>

                    {/* Body */}
                    <div className="chat-modal-body ">
                        <div className="chat-message-bubble shadow-chat-bubble pt-4">
                            Hi, I’m your virtual assistant. How can I help you today?
                        </div>
                    </div>

                    {/* Input */}
                    <div className="chat-modal-input-container bg-transparent border-none rounded-full">
                        <input
                            placeholder="Type your message..."
                            className="chat-modal-input bg-[#F6F6F6] rounded-full"
                        />
                        <button className="chat-send-button rounded-full">
                            <CiLocationArrow1 />
                        </button>
                    </div>

                </div>
            )}
        </>
    );
};

export default ReviewChatModal;
