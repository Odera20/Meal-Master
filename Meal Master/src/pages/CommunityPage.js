import React, { useState } from 'react';
import Modal from 'react-modal';

// Initialize the Modal styles (optional)
Modal.setAppElement('#root');

const CommunityPage = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Function to add a new post
    const addPost = () => {
        if (newPost.trim() !== '') {
            setPosts([...posts, { content: newPost, likes: 0, comments: 0 }]);
            setNewPost('');
            setModalIsOpen(false);
        }
    };

    // Function to increase the like count for a post
    const likePost = (index) => {
        const updatedPosts = [...posts];
        updatedPosts[index].likes += 1;
        setPosts(updatedPosts);
    };

    // Function to open and close the modal
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Community Meals 🍽️</h1>

            {/* Button to open the modal for sharing a meal */}
            <button onClick={openModal} className="p-2 bg-blue-500 text-white rounded-md">
                Share a Meal
            </button>

            {/* List of community posts */}
            <ul className="mt-4">
                {posts.length === 0 ? (
                    <p>No posts yet. Be the first to share your meal!</p>
                ) : (
                    posts.map((post, index) => (
                        <li key={index} className="mb-6 p-4 border-b">
                            <p>{post.content}</p>
                            <div className="mt-2">
                                {/* Like and Comment buttons */}
                                <button 
                                    onClick={() => likePost(index)} 
                                    className="mr-4 bg-green-500 text-white p-1 rounded"
                                >
                                    👍 {post.likes}
                                </button>
                                <button className="bg-gray-500 text-white p-1 rounded">
                                    💬 {post.comments}
                                </button>
                            </div>
                        </li>
                    ))
                )}
            </ul>

            {/* Modal for adding new posts */}
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="p-4 bg-white rounded-md shadow-md">
                <h2 className="text-2xl mb-4">Share Your Meal</h2>

                <textarea
                    className="w-full p-2 border rounded-md mb-4"
                    placeholder="Describe your meal..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                />

                {/* Buttons inside modal */}
                <div className="flex justify-end">
                    <button onClick={addPost} className="p-2 bg-blue-500 text-white rounded-md mr-2">
                        Post
                    </button>
                    <button onClick={closeModal} className="p-2 bg-gray-500 text-white rounded-md">
                        Cancel
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default CommunityPage;
