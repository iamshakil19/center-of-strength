import React from 'react';
import './Blogs.css'
import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Blogs = () => {
        let [categories] = useState({
            Question1: [
                {
                    id: 1,
                    question: 'Difference between authorization and authentication?',
                    ans: "অথেনটিকেশন হচ্ছে একজন ইউজার সে সঠিক কিনা সেটা চেক করা। যেমন একজন ইউজার যখন লগইন করে তখন ইমেইল পাসওয়ার্ড দেয় এবং অথেন্টিকেট করে যদি সেগুলো সঠিক থাকে তাহলে তাকে ভিতরে ঢুকতে দেওয়া হয় আর অথরাইজেশন হচ্ছে একজন অথেন্টিক ইউজার ওয়েবসাইটে ঢোকার পরে কি কি অ্যাকসেস পাবে সেটা। অথরাইজেশন শুধু অথেন্টিক ইউজারের জন্যই হয়।"
                }
            ],
            Question2: [
                {
                    id: 1,
                    question: ' Why are you using firebase? What other options do you have to implement authentication?',
                    ans: "একজন ইউজারকে অথেন্টিক অথবা ভ্যালিড করার জন্য আমরা ফায়ারবেজ ব্যবহার করি। ফায়ারবেজ ছাড়াও আরো অনেক ওয়েবসাইট আছে যাদের মাধ্যমে আমরা অথেন্টিকেট করতে পারি যেমনঃ Okta, Auth0, MongoDB, keyclock, IBM etc."
                }
            ],
            Question3: [
                {
                    id: 1,
                    question: 'What other services does firebase provide other than authentication?',
                    ans: "ফায়ারবেজ অথেনটিকেশন ছাড়া আরো কিছু সার্ভিস দেয়। সেগুলো হচ্ছে Hosting, Google Analytics, Cloud Messaging, Dynamic Links, Cloud Firestore etc."
                }
            ],
        })

        return (
            <div style={{height: "100vh"}} className="w-full max-w-md px-2 py-16 sm:px-0 mx-auto">
                <Tab.Group>
                    <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {Object.values(categories).map((posts, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'bg-white rounded-xl p-3',
                                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                                )}
                            >
                                <ul>
                                    {posts.map((post) => (
                                        <li
                                            key={post.id}
                                            className="relative p-3 rounded-md hover:bg-coolGray-100"
                                        >
                                            <h3 className="text-sm font-medium leading-5">
                                                {post.question}
                                            </h3>

                                            <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                                                <li>{post.ans}</li>
                                            </ul>

                                            <a
                                                href="#"
                                                className={classNames(
                                                    'absolute inset-0 rounded-md',
                                                    'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400'
                                                )}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        );
    };

    export default Blogs;