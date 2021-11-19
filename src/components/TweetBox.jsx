import React, { useState } from 'react'
import { EmojiIcon, GIFIcon, ImageIcon, PollIcon, ScheduleIcon } from '../icons/Icon'
import db from "../firebase";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";





const TweetBox = () => {
    const [content, setContent] = useState('');

    const sendTweet = async () => {
        if (content !== '') {
            const userRef = collection(db, 'feed');

            await setDoc(doc(userRef), {
                displayName: "iksipi",
                userName: "@davsanavi",
                content,
                timestamp: serverTimestamp(),
                avatar: "https://pbs.twimg.com/profile_images/1457293343990456324/c2yR0CpQ_400x400.jpg",
                image: "https://media.giphy.com/media/LdiCMqyuFCt72e6PXa/giphy.gif"
            }).then((result) => {
                console.log("user added!")
            }).catch((err) => {
                console.log(err)
            });;
            setContent("");
        }
    }

    return (
        <div className="flex flex-col flex-1 mt-2 px-2 dark:bg-black">
            <textarea
                className="w-full text-xl placeholder-gray-dark dark:text-gray-300 dark:placeholder-gray-300 outline-none overflow-hidden resize-none bg-transparent"
                placeholder="What's happening?"
                onChange={e => setContent(e.target.value)}
                value={content} />
            <div className="flex items-center justify-between">
                <div className="flex -ml-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <ImageIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <GIFIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <PollIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <ScheduleIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                        <EmojiIcon className="w-6 h-6 text-primary-base" />
                    </div>

                </div>
                <button className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
                    onClick={sendTweet}
                >Tweet</button>
            </div>
        </div>
    )
}

export default TweetBox
