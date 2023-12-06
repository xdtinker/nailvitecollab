import { useEffect, useState } from "react";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firestore.js";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = async (e) => {
    try {
      e.preventDefault();
      const docRef = await addDoc(collection(db, "col_chat"), {
        message: message,
      });
      console.log("message send with ID: ", docRef.id);
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  const fetchChat = async () => {
    // Your Firestore setup (assuming 'db' is your Firestore instance)
    const chatCollection = collection(db, "col_chat");

    // Listening for real-time updates using onSnapshot
    const unsubscribe = onSnapshot(chatCollection, (snapshot) => {
      const chatData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setChat(chatData);
    });

    // Remember to unsubscribe when component unmounts to prevent memory leaks
    return () => unsubscribe();
  };

  useEffect(() => {
    fetchChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <button
        className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        data-state="closed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white block border-gray-200 align-middle"
        >
          <path
            d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
            className="border-gray-200"
          ></path>
        </svg>
      </button>

      <div
        style={{
          boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
        }}
        className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px]"
      >
        {/* Heading */}
        <div className="flex flex-col space-y-1.5 pb-6 border-b-2">
          <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
        </div>

        {/* Chat Container */}
        <div
          className="pr-4 h-[474px]"
          style={{ minWidth: "100%", display: "table" }}
        >
          {/* Chat Messages */}
          {/* AI Chat Message */}
          <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
              <div className="rounded-full bg-gray-100 border p-1">
                <svg
                  stroke="none"
                  fill="black"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                ></svg>
              </div>
            </span>
            <p className="leading-relaxed">
              <span className="block font-bold text-gray-700">Support </span>
              Hi, how can I help you today?
            </p>
          </div>

          {/* User Chat Message */}
          <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
              <div className="rounded-full bg-gray-100 border p-1">
                <svg
                  stroke="none"
                  fill="black"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* User Message SVG */}
                </svg>
              </div>
            </span>
            <p className="leading-relaxed">
              <span className="block font-bold text-gray-700">You </span>
              sample message
            </p>
          </div>

          {chat.map((message) => (
            <div
              className="flex gap-3 my-4 text-gray-600 text-sm flex-1"
              key={message.id}
            >
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <svg
                    stroke="none"
                    fill="black"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* User Message SVG */}
                  </svg>
                </div>
              </span>
              <p className="leading-relaxed">
                <span className="block font-bold text-gray-700">You </span>
                {message.message}
              </p>
            </div>
          ))}
        </div>

        {/* Input box */}
        <div className="flex items-center pt-0">
          <form
            className="flex items-center justify-center w-full space-x-2"
            onSubmit={sendMessage}
          >
            <input
              className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
              placeholder="Type your message"
              value={message}
              onChange={handleMessageChange}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chat;
